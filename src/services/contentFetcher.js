import http from "node:http";

export function fetchContent(url) {
  http
    .get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        return data;
      });
    })
    .on("error", (err) => {
      console.error("Error fetching content:", err);
    });
}
