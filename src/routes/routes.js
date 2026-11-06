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

export function route(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const path = url.pathname;
/*Land page pagina inicial a gente decide depois*/ 
if (url.pathname === '/') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(homePage());
  return;
}

/*perguntar pro correa acaba aqui*/


/*termo e busca o negocio pra usar no search que busca os itens*/
/*R: APOSTILA 4,5*/
if (url.pathname === '/lines/param') {

  if (url.searchParams.has('param')) {
    const param = url.searchParams.get('param');
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(linePage());
  return;
}


/*perguntar pro correa acaba aqui*/




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
}
