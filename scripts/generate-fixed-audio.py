import asyncio
import json
import os
from datetime import datetime, timezone
from pathlib import Path

import edge_tts


ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "audio-catalog.json"
OUTPUT_DIR = ROOT / "audio" / "standard"
VOICE = os.environ.get("JAPANESE_TTS_VOICE", "ja-JP-NanamiNeural")
CONCURRENCY = int(os.environ.get("JAPANESE_TTS_CONCURRENCY", "5"))
MINIMUM_FILE_SIZE = 1024


async def synthesize(entry, semaphore):
    target = ROOT / entry["audioPath"]
    if target.exists() and target.stat().st_size > MINIMUM_FILE_SIZE:
        return "cached"

    speech_text = entry.get("resolvedSpeechText") or entry["speechText"]
    temporary = target.with_suffix(".mp3.part")
    target.parent.mkdir(parents=True, exist_ok=True)

    async with semaphore:
        last_error = None
        for attempt in range(1, 6):
            try:
                temporary.unlink(missing_ok=True)
                communicate = edge_tts.Communicate(
                    speech_text,
                    VOICE,
                    rate="+0%",
                    volume="+0%",
                    pitch="+0Hz",
                )
                await communicate.save(str(temporary))
                if temporary.stat().st_size <= MINIMUM_FILE_SIZE:
                    raise RuntimeError(f"audio file too small: {temporary.stat().st_size} bytes")
                temporary.replace(target)
                return "created"
            except Exception as error:
                last_error = error
                await asyncio.sleep(min(2 ** attempt, 20))
        raise RuntimeError(str(last_error))


async def main():
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    entries = catalog["entries"]
    semaphore = asyncio.Semaphore(CONCURRENCY)
    created = 0
    cached = 0
    failures = []

    async def run(entry):
        nonlocal created, cached
        try:
            result = await synthesize(entry, semaphore)
            if result == "created":
                created += 1
            else:
                cached += 1
            completed = created + cached
            if completed % 25 == 0 or completed == len(entries):
                print(f"{completed}/{len(entries)}")
        except Exception as error:
            failures.append(
                {"id": entry["id"], "text": entry["text"], "error": str(error)}
            )

    await asyncio.gather(*(run(entry) for entry in entries))

    if failures:
        (OUTPUT_DIR / "failures.json").write_text(
            json.dumps(failures, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        raise RuntimeError(f"{len(failures)} audio files failed")

    (OUTPUT_DIR / "failures.json").unlink(missing_ok=True)
    manifest = {
        entry["text"]: f"./{entry['audioPath']}"
        for entry in entries
    }
    (ROOT / "standard-audio.js").write_text(
        "window.STANDARD_AUDIO = "
        + json.dumps(manifest, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    (OUTPUT_DIR / "manifest.json").write_text(
        json.dumps(
            {
                "voice": VOICE,
                "locale": "ja-JP",
                "readingPolicy": "curated aliases plus Japanese lexical analysis",
                "generatedAt": datetime.now(timezone.utc).isoformat(),
                "entries": len(entries),
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(
        json.dumps(
            {
                "voice": VOICE,
                "created": created,
                "cached": cached,
                "total": len(entries),
            },
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    asyncio.run(main())
