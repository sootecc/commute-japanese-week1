import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadLessons } from "./lesson-data.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const { days, weeks } = loadLessons(rootDir);
const overrideConfig = JSON.parse(fs.readFileSync(path.join(rootDir, "audio-pronunciation-overrides.json"), "utf8"));
const overrides = overrideConfig.entries || {};
const globalAliases = overrideConfig.globalAliases || {};
const entries = new Map();

function addItem(text, type, dayIndex, lesson, detail = "") {
  if (!text?.trim()) return;
  const normalizedText = text.trim();
  const override = overrides[normalizedText] || {};
  const speechText = override.speechText || normalizedText;
  const aliases = Object.entries(globalAliases)
    .filter(([surface]) => speechText.includes(surface))
    .map(([surface, alias]) => ({ surface, alias }))
    .sort((a, b) => b.surface.length - a.surface.length);
  const key = `${normalizedText}\u0000${speechText}`;
  const existing = entries.get(key);
  const appearance = {
    day: dayIndex + 1,
    week: Math.floor(dayIndex / 7) + 1,
    month: Math.floor(dayIndex / 28) + 1,
    lesson,
    type,
    detail
  };

  if (existing) {
    existing.appearances.push(appearance);
    return;
  }

  const id = crypto.createHash("sha256").update(key).digest("hex").slice(0, 16);
  entries.set(key, {
    id,
    text: normalizedText,
    speechText,
    aliases,
    reviewStatus: "pending",
    accentStandard: "Tokyo common Japanese / OJAD-NHK reference",
    overrideReason: override.reason || "",
    audioPath: `audio/standard/${id}.mp3`,
    appearances: [appearance]
  });
}

days.forEach((day, dayIndex) => {
  day.letters.forEach(([text, romanization, meaning]) => {
    addItem(text, day.kind === "phrase" ? "phrase" : "kana", dayIndex, day.title, meaning || romanization || "");
  });
  day.words.forEach(([text, , meaning]) => {
    addItem(text, "word", dayIndex, day.title, meaning || "");
  });
});

const catalogEntries = [...entries.values()].sort((a, b) => {
  const dayDifference = a.appearances[0].day - b.appearances[0].day;
  return dayDifference
    || a.appearances[0].type.localeCompare(b.appearances[0].type)
    || a.text.localeCompare(b.text, "ja");
});
const catalog = {
  version: 1,
  generatedAt: new Date().toISOString(),
  standard: {
    target: "Tokyo common Japanese used for public speech",
    reference: [
      "NHK日本語発音アクセント新辞典",
      "OJAD オンライン日本語アクセント辞書"
    ],
    synthesisVoice: "ja-JP-NanamiNeural",
    note: "Microsoft ja-JP 음성만으로 방송 악센트가 보증되지는 않으므로 읽기·악센트 검수 상태를 별도로 관리한다."
  },
  totals: {
    days: days.length,
    weeks: weeks.length,
    uniqueAudioItems: catalogEntries.length,
    phrases: catalogEntries.filter(item => item.appearances.some(appearance => appearance.type === "phrase")).length,
    words: catalogEntries.filter(item => item.appearances.some(appearance => appearance.type === "word")).length,
    kana: catalogEntries.filter(item => item.appearances.some(appearance => appearance.type === "kana")).length
  },
  entries: catalogEntries
};

fs.writeFileSync(path.join(rootDir, "audio-catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
console.log(JSON.stringify(catalog.totals, null, 2));
