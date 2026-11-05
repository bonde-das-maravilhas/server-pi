import { readFileSync } from 'node:fs';
import { homePage, PageNotFound } from '../views/temp.js';

export function route(request, response) {

if (request.method === 'GET' && request.url === '/assets/images/404.svg') {
  response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  response.end(readFileSync(new URL('../assets/images/404.svg', import.meta.url)));
  return;
}

/*Land page pagina inicial a gente decide depois*/ 
if (request.method === 'GET' && request.url === '/') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(homePage());
  return;
}


/*perguntar pro correa*/
/*como linkar um arquivo html com a rota nos arquivos na pasta views*/
/*perguntar como que linka uma pasta pq é loucura upar uma img via rota e dai pra cada img subir uma rota pra isso*/



/*termo e busca o negocio pra usar no search que busca os itens*/
if (request.method === 'GET' && request.url === '/line?=Lilás') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}


/*perguntar pro correa acaba aqui*/




/*tudo quem tem no footer */


/*MAPA*/ 
if (request.method === 'GET' && request.url === '/map') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}

/*perfil*/ 
if (request.method === 'GET' && request.url === '/perfil') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}

/*Perguntas frequentes*/   
if (request.method === 'GET' && request.url === '/Useful&Questions') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}

/*termos de uso*/ 
if (request.method === 'GET' && request.url === '/Use&terms') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}

/*politica de privacidade*/ 
if (request.method === 'GET' && request.url === '/policy&terms') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<h1>Bem-vindo à página inicial!</h1>');
  return;
}

/*sobre*/ 
if (request.method === 'GET' && request.url === '/about&us') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}

/*community*/ 
if (request.method === 'GET' && request.url === '/community') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}

/*alerts*/ 
if (request.method === 'GET' && request.url === '/alerts') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}


/*rotas*/ 
if (request.method === 'GET' && request.url === '/lines') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}

/*CADASTRO E LOGIN DO SITE*/

/*register*/ 
if (request.method === 'GET' && request.url === '/register') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}

/*login*/ 
if (request.method === 'GET' && request.url === '/login') {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
  return;
}



/*ADMINISTRO DA PAGINA*/

/*admin*/ 
if (request.method === 'GET' && request.url === '/admin') {
  response.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`<h1>VOCÊS Não PASSARAM</h1>
    <img src="https://t2.tudocdn.net/307995?w=1920" alt="gandalf image">
    `);
    return;
  }
  
  
/*404*/ 
response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
response.end(PageNotFound());
}
