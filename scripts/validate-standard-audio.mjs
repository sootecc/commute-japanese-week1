import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const catalog = JSON.parse(fs.readFileSync(path.join(rootDir, "audio-catalog.json"), "utf8"));
const manifestSource = fs.readFileSync(path.join(rootDir, "standard-audio.js"), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(manifestSource, sandbox, { filename: "standard-audio.js" });
const manifest = sandbox.window.STANDARD_AUDIO || {};
const issues = [];

for (const entry of catalog.entries) {
  const source = manifest[entry.text];
  if (!source) {
    issues.push(`${entry.text}: manifest missing`);
    continue;
  }
  const filePath = path.resolve(rootDir, source.replace(/^\.\//, ""));
  if (!fs.existsSync(filePath)) {
    issues.push(`${entry.text}: file missing`);
    continue;
  }
  const size = fs.statSync(filePath).size;
  if (size < 1024) issues.push(`${entry.text}: file too small (${size} bytes)`);
}

const extraManifestEntries = Object.keys(manifest).filter(
  text => !catalog.entries.some(entry => entry.text === text)
);
if (extraManifestEntries.length) {
  issues.push(`extra manifest entries: ${extraManifestEntries.length}`);
}

const report = {
  expected: catalog.entries.length,
  manifest: Object.keys(manifest).length,
  valid: catalog.entries.length - issues.filter(issue => !issue.startsWith("extra")).length,
  issues
};
console.log(JSON.stringify(report, null, 2));
if (issues.length) process.exitCode = 1;
