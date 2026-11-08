import {
  aboutPage,
  adminPage,
  alertsPage,
  communityPage,
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
import { searchLines } from '../data/data.js';

export function route(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const path = url.pathname;
/*Land page pagina inicial a gente decide depois*/ 
if (url.pathname === '/') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(homePage());
  return;
}

/*perguntar pro correa*/

/*como linkar a busca com as paginas e seus parametros, e como fazer a busca funcionar com o parametro que vem da pagina de busca*/


/*perguntar pro correa acaba aqui*/
/*linhas do busca*/
if (url.pathname === '/lines/search') {
  const term = url.searchParams.get('term');
  const results = searchLines(term);
  
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
const items = results
  .map((item) => `<li><a href="/line/${item.line}">${item.line}</a></li>`)
  .join('');
response.end(`
  <h1>Resultados da busca para "${term}"</h1>
  <ul>${items}</ul>
`);
return;
}

/*tudo quem tem no footer */


/*MAPA*/ 
if (url.pathname === '/map') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(mapPage());
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

/*alerts*/ 
if (url.pathname === '/alerts') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(alertsPage());
  return;
}


/*rotas*/ 
if (url.pathname === '/lines') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(linesPage());
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

