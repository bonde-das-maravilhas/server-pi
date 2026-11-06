function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
      </head>
      <body>
        <nav>
          <a href="/">Inicio</a>
          <a href="/line?=Lilás">Linha Lilás</a>
          <a href="/map">Mapa</a>
          <a href="/perfil">Perfil</a>
          <a href="/Useful&amp;Questions">Perguntas frequentes</a>
          <a href="/Use&amp;terms">Termos de uso</a>
          <a href="/policy&amp;terms">Politica de privacidade</a>
          <a href="/about&amp;us">Sobre nos</a>
          <a href="/community">Comunidade</a>
          <a href="/alerts">Alertas</a>
          <a href="/lines">Linhas</a>
          <a href="/register">Cadastro</a>
          <a href="/login">Login</a>
          <a href="/admin">Admin</a>
        </nav>
        ${content}
      </body>
    </html>
  `;
}

export function homePage() {
  return layout('Home', '<h1>Welcome to the store</h1>');
}

export function linePage() {
  return layout('Linha Lilás', '<h1>Linha Lilás</h1>');
}

export function mapPage() {
  return layout('Mapa', '<h1>Mapa</h1>');
}

export function profilePage() {
  return layout('Perfil', '<h1>Perfil</h1>');
}

export function faqPage() {
  return layout('Perguntas frequentes', '<h1>Perguntas frequentes</h1>');
}

export function termsPage() {
  return layout('Termos de uso', '<h1>Termos de uso</h1>');
}

export function privacyPage() {
  return layout('Política de privacidade', '<h1>Política de privacidade</h1>');
}

export function aboutPage() {
  return layout('Sobre nós', '<h1>Sobre nós</h1>');
}

export function communityPage() {
  return layout('Comunidade', '<h1>Comunidade</h1>');
}

export function alertsPage() {
  return layout('Alertas', '<h1>Alertas</h1>');
}

export function linesPage() {
  return layout('Linhas', '<h1>Linhas</h1>');
}

export function registerPage() {
  return layout('Cadastro', '<h1>Cadastro</h1>');
}

export function loginPage() {
  return layout('Login', '<h1>Login</h1>');
}

export function adminPage() {
  return layout('Admin', '<h1>Acesso negado</h1>');
}

export function notFoundPage() {
  return layout('Página não encontrada', '<h1>404 - Página não encontrada</h1>');
}