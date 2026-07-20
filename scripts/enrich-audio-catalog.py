import json
import os
from pathlib import Path

from fugashi import Tagger
import unidic_lite


ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "audio-catalog.json"
tagger = Tagger(f'-d "{unidic_lite.DICDIR}"')


def value(feature, name, fallback=""):
    result = getattr(feature, name, fallback)
    return fallback if result in (None, "*") else result


def analyze(text):
    tokens = []
    reading_parts = []
    for word in tagger(text):
        feature = word.feature
        pronunciation = value(feature, "pron") or value(feature, "kana") or word.surface
        if any(character.isalnum() or "\u3040" <= character <= "\u30ff" for character in word.surface):
            reading_parts.append(pronunciation)
        tokens.append(
            {
                "surface": word.surface,
                "lemma": value(feature, "lemma", word.surface),
                "pronunciation": pronunciation,
                "accentType": value(feature, "aType"),
                "accentConnection": value(feature, "aConType"),
            }
        )
    return {"reading": "".join(reading_parts), "tokens": tokens}


catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
for entry in catalog["entries"]:
    resolved_text = entry["speechText"]
    for alias in entry.get("aliases", []):
        resolved_text = resolved_text.replace(alias["surface"], alias["alias"])
    analysis = analyze(resolved_text)
    entry["reading"] = analysis["reading"]
    entry["resolvedSpeechText"] = resolved_text
    entry["accentAnalysis"] = {
        "source": "Curated reading aliases + UniDic automatic baseline; accent requires OJAD/NHK review",
        "status": "pending-human-review",
        "tokens": analysis["tokens"],
    }

CATALOG_PATH.write_text(
    json.dumps(catalog, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)
print(
    json.dumps(
        {
            "entries": len(catalog["entries"]),
            "withReading": sum(bool(entry.get("reading")) for entry in catalog["entries"]),
            "reviewStatus": "pending-human-review",
        },
        ensure_ascii=False,
        indent=2,
    )
)
