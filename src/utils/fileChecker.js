import fs from "node:fs";

export function isFilePath(filePathOrUrl) {
  if (filePathOrUrl.startsWith("http") || filePathOrUrl.startsWith("https")) {
    return false;
  }

  return new Promise((resolve) => {
    fs.access(filePathOrUrl, fs.constants.F_OK, (err) => {
      resolve(!err);
    });
  });
}
