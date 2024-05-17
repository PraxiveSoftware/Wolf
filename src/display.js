import { isFilePath } from "./utils/fileChecker.js";
import { readFile } from "./services/fileReader.js";
import { fetchContent } from "./services/contentFetcher.js";

export default function fetchAndDisplay(filePathOrUrl) {
  const isLocalFile = isFilePath(filePathOrUrl);

  if (isLocalFile) {
    readFile(filePathOrUrl);
  } else {
    fetchContent(filePathOrUrl);
  }
}
