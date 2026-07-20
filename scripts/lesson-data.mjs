import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

export function loadLessons(rootDir) {
  const sandbox = { window: {} };
  const monthSource = fs.readFileSync(path.join(rootDir, "month-data.js"), "utf8");
  const fiveMonthSource = fs.readFileSync(path.join(rootDir, "five-month-data.js"), "utf8");
  const appSource = fs.readFileSync(path.join(rootDir, "app.js"), "utf8");

  vm.runInNewContext(monthSource, sandbox, { filename: "month-data.js" });
  vm.runInNewContext(fiveMonthSource, sandbox, { filename: "five-month-data.js" });

  const arrayStart = appSource.indexOf("const DAYS = [") + "const DAYS = ".length;
  const arrayEnd = appSource.indexOf("\n];\n\nconst PRONUNCIATION_DAYS") + 2;
  if (arrayStart < "const DAYS = ".length || arrayEnd < 2) {
    throw new Error("app.js에서 기본 학습 데이터를 찾지 못했습니다.");
  }

  const baseDays = vm.runInNewContext(`(${appSource.slice(arrayStart, arrayEnd)})`, sandbox, {
    filename: "app-days.js"
  });
  const days = [...baseDays, ...sandbox.window.EXTRA_DAYS];
  if (days.length !== 140) {
    throw new Error(`학습일은 140일이어야 하지만 ${days.length}일을 찾았습니다.`);
  }

  return { days, weeks: sandbox.window.WEEK_INFO };
}
