const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');
  const date = new Date(iso);

  if (pathname === '/api/parsetime') {
    const result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else if (pathname === '/api/unixtime') {
    const result = {
      unixtime: date.getTime()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
