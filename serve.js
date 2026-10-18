const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function resolvePath(urlPath) {
  let decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  let filePath = path.join(ROOT_DIR, decoded);

  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const indexHtml = path.join(filePath, 'index.html');
      if (fs.existsSync(indexHtml)) {
        return indexHtml;
      }
    } else {
      return filePath;
    }
  }

  // Try appending .html
  if (fs.existsSync(filePath + '.html')) {
    return filePath + '.html';
  }

  // Try path/index.html
  const subIndex = path.join(filePath, 'index.html');
  if (fs.existsSync(subIndex)) {
    return subIndex;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Internal Server Error: ${err.message}`);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n=================================================`);
  console.log(`⚡ Akshat's Portfolio Local Server is running!`);
  console.log(`📡 URL: http://127.0.0.1:${PORT}`);
  console.log(`📁 Serving directory: ${ROOT_DIR}`);
  console.log(`⌨️  Press Ctrl+C to stop.`);
  console.log(`=================================================\n`);
});
