import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';

const publicDirectory = resolve('dist');
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/manifest+json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

function setSecurityHeaders(response) {
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('X-Frame-Options', 'DENY');
}

async function resolveRequestFile(pathname, acceptsHtml) {
  const decodedPath = decodeURIComponent(pathname);
  const requestedFile = resolve(publicDirectory, `.${decodedPath}`);

  if (requestedFile !== publicDirectory && !requestedFile.startsWith(`${publicDirectory}${sep}`)) {
    return null;
  }

  try {
    const details = await stat(requestedFile);
    return details.isDirectory() ? resolve(requestedFile, 'index.html') : requestedFile;
  } catch {
    if (acceptsHtml && extname(decodedPath) === '') {
      return resolve(publicDirectory, 'index.html');
    }

    return null;
  }
}

const server = createServer(async (request, response) => {
  setSecurityHeaders(response);

  if (request.url === '/healthz') {
    response.writeHead(200, { 'Cache-Control': 'no-store', 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('ok');
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  let requestUrl;

  try {
    requestUrl = new URL(request.url ?? '/', 'http://localhost');
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }

  let filePath;

  try {
    filePath = await resolveRequestFile(
      requestUrl.pathname,
      request.headers.accept?.includes('text/html') ?? false,
    );
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }

  if (!filePath) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const extension = extname(filePath);
  const cacheControl = requestUrl.pathname.startsWith('/assets/')
    ? 'public, max-age=31536000, immutable'
    : 'public, max-age=0, must-revalidate';
  response.writeHead(200, {
    'Cache-Control': cacheControl,
    'Content-Type': mimeTypes.get(extension) ?? 'application/octet-stream',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Francos Corporation Site disponível na porta ${port}`);
});
