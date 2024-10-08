const http = require("http");
const map = require("through2-map");

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    request
      .pipe(
        map((chunk) => {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(response);
  } else {
    response.end("Send a POST request\n");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
