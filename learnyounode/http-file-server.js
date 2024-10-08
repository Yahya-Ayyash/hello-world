const http = require("http");
const fs = require("fs");

const port = +process.argv[2];
const filePath = process.argv[3];

http.createServer ((request, response) => {
fs.createReadStream (filePath).pipe (response);
}).listen(port);