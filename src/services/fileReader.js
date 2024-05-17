import fs from "node:fs";

export function readFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      return data;
    }
  });
}
