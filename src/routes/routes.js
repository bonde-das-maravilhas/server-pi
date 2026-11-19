import {
  aboutPage,
  adminPage,
  alertsPage,
  communityPage,
  commentPage,
  faqPage,
  homePage,
  linePage,
  linesPage,
  loginPage,
  mapPage,
  notFoundPage,
  privacyPage,
  profilePage,
  registerPage,
  termsPage,
} from '../views/view.js';
import { searchLines, getLineByNumber, getLines } from '../data/data.js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const srcRoot = path.resolve(fileURLToPath(new URL('../', import.meta.url)));

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

async function serveStatic(pathname, response, requestMethod) {
  if (!pathname.startsWith('/src/') && !pathname.startsWith('/script/')) {
    return false;
  }

  const relativePath = decodeURIComponent(pathname).replace(/^\/src\//, '').replace(/^\/script\//, 'script/');
  const filePath = path.resolve(srcRoot, relativePath);

  if (filePath !== srcRoot && !filePath.startsWith(srcRoot + path.sep)) {
    return false;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
    });
    response.end(requestMethod === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Arquivo nao encontrado');
  }

  return true;
}

export async function route(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const path = url.pathname;

  if ((request.method === 'GET' || request.method === 'HEAD') && await serveStatic(path, response, request.method)) {
    return;
  }

  /*Land page pagina inicial a gente decide depois*/
  if (url.pathname === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(homePage());
    return;
  }

  /*linhas do busca*/
  if (url.pathname === '/lines/search') {
    const term = url.searchParams.get('term');
    const results = searchLines(term);

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const items = results
      .map((item) => `<li><a href="/line?number=${item.lineNumber}">${item.line}</a></li>`)
      .join('');
    response.end(`
  <h1>Resultados da busca para "${term}"</h1>
  <ul>${items}</ul>
`);
    return;
  }

  /*pagina de uma linha*/
  if (url.pathname === '/line') {
    const number = Number(url.searchParams.get('number'));
    const line = getLineByNumber(number);

    if (!line) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(notFoundPage());
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(linePage(line));
    return;
  }

  /*tudo quem tem no footer */


  /*COMENTARIOS*/
  if (url.pathname === '/comentarios') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(commentPage());
    return;
  }

  /*perfil*/
  if (url.pathname === '/perfil') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(profilePage());
    return;
  }

  /*Perguntas frequentes*/
  if (url.pathname === '/Useful&Questions') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(faqPage());
    return;
  }

  /*termos de uso*/
  if (url.pathname === '/Use&terms') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(termsPage());
    return;
  }

  /*politica de privacidade*/
  if (url.pathname === '/policy&terms') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(privacyPage());
    return;
  }

  /*sobre*/
  if (url.pathname === '/about&us') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(aboutPage());
    return;
  }

  /*community*/
  if (url.pathname === '/community') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(communityPage());
    return;
  }

  /*mapa*/
  if (url.pathname === '/map') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(mapPage());
    return;
  }

  /*alerts*/
  if (url.pathname === '/alerts') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(alertsPage());
    return;
  }


  /*rotas*/
  if (url.pathname === '/lines') {
    const list = getLines();

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(linesPage(list));
    return;
  }

  /*CADASTRO E LOGIN DO SITE*/

  /*register*/
  if (url.pathname === '/register') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(registerPage());
    return;
  }

  /*login*/
  if (url.pathname === '/login') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(loginPage());
    return;
  }



  /*ADMINISTRO DA PAGINA*/

  /*admin*/
  if (request.method === 'GET' && path === '/admin') {
    response.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(adminPage());
    return;
  }


  /*404*/
  response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(notFoundPage());
}