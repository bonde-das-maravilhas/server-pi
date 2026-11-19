function layout(title, content) {
  const pageStyles = {
    '404': '/src/styles/404.css',
    'Cadastro': '/src/styles/cadastro.css',
    'Alertas': '/src/styles/alerts.css',
    'Perfil': '/src/styles/profile.css',
    'Comentários': '/src/styles/comentarios.css',
    'Comunidade': '/src/styles/comunidade.css',
  };

  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
      
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      
      <link rel="stylesheet" href="/src/styles/style.css">
      <link rel="stylesheet" href="/src/styles/reset.css">
      ${pageStyles[title] ? `<link rel="stylesheet" href="${pageStyles[title]}">` : ''}

      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
      <script src="/script/script.js" defer></script>
      

      </head>
      <body>
        <nav>
          <a href="/">Inicio</a>
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
  return layout('Home', `
    <header>
        <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>

        <section class="lines">
            <div class="lines-container">
                <div class="lines-track">


                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    </header>

    <main>

        <section class="main-left">
            <div class="map">

            </div>

            <div class="route-planner">
                <div class="route-title">
                    <img src="/src/assets/images/train.svg" alt="icone de metrô azul">
                    <h3>Planeje sua rota</h3>
                </div>

                <div class="route">
                    <div class="route-field">
                        <label class="field-label" for="origin">
                            <img src="/src/assets/images/pin-blue.svg" alt="icone de localização">
                            De
                        </label>
                        <div class="field-input">
                            <input type="text" id="origin" placeholder="Digite uma estação">
                            <button type="button" class="clear-field" aria-label="Limpar origem">X</button>
                        </div>
                    </div>

                    <button type="button" class="swap-button" aria-label="Inverter origem e destino">
                        <img src="/src/assets/images/arrows.svg" alt="icone de inverção">
                    </button>

                    <div class="route-field">
                        <label class="field-label" for="destination">
                            <img src="/src/assets/images/pin-blue.svg" alt="icone de localização">
                            Para
                        </label>
                        <div class="field-input">
                            <input type="text" id="destination" placeholder="Digite uma estação">
                            <button type="button" class="clear-field" aria-label="Limpar destino">X</button>
                        </div>
                    </div>
                </div>

                <button type="button" class="find-route">
                    <img src="/src/assets/images/lupa-branca.svg" alt=" icone de lupa branca">
                    Encontrar melhor rota
                </button>
            </div>

            <div class="suggested-routes">
                <div class="suggested-title">
                    <img src="/src/assets/images/route.svg" alt="icone rotas">
                    <h3>Sugestão de Rotas</h3>
                </div>

                <div class="cards-suggested-row">
                    
                    <div class="suggested-card">
                        <div class="condition-route">
                            Mais rápida
                        </div>
                        <div class="line-route-suggested">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <img src="/src/assets/images/arrow-black.svg" alt="seta preta">
                            <div class="line-number three">
                                3
                            </div>
                        </div>
                        <p class="place-to-place">Praça da Árvore → Santa Cecilia</p>
                        <p class="time-route">10 min</p>
                        <div class="transfer">
                            <img src="/src/assets/images/transfer.svg" alt="icone transfer">
                            <p> 1 transferência</p>
                        </div>
                        <button class="route-button-seggested">
                            Ver rota
                            <img src="/src/assets/images/vector.svg" alt="">
                        </button>

                    </div>
                    <div class="suggested-card">
                        <div class="condition-route">
                            Mais rápida
                        </div>
                        <div class="line-route-suggested">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <img src="/src/assets/images/arrow-black.svg" alt="seta preta">
                            <div class="line-number three">
                                3
                            </div>
                        </div>
                        <p class="place-to-place">Praça da Árvore → Santa Cecilia</p>
                        <p class="time-route">10 min</p>
                        <div class="transfer">
                            <img src="/src/assets/images/transfer.svg" alt="icone transfer">
                            <p> 1 transferência</p>
                        </div>
                        <button class="route-button-seggested">
                            Ver rota
                            <img src="/src/assets/images/vector.svg" alt="">
                        </button>

                    </div>
                    <div class="suggested-card">
                        <div class="condition-route">
                            Mais rápida
                        </div>
                        <div class="line-route-suggested">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <img src="/src/assets/images/arrow-black.svg" alt="seta preta">
                            <div class="line-number three">
                                3
                            </div>
                        </div>
                        <p class="place-to-place">Praça da Árvore → Santa Cecilia</p>
                        <p class="time-route">10 min</p>
                        <div class="transfer">
                            <img src="/src/assets/images/transfer.svg" alt="icone transfer">
                            <p> 1 transferência</p>
                        </div>
                        <button class="route-button-seggested">
                            Ver rota
                            <img src="/src/assets/images/vector.svg" alt="">
                        </button>

                    </div>
                </div>



            </div>

            <div class="share-update">

                <div class="share-update-title">
                    <img src="/src/assets/images/add-balloon.svg"
                        alt="Ícone de um balão de conversa com um sinal de mais">
                    <div class="text-top-update">
                        <h3>Compartilhe uma atualização</h3>
                        <p>Ajude outros usuários a se manterem informados sobre o metrô!</p>
                    </div>
                </div>


                <div class="share-selectors-row">
                    <div class="select-group">
                        <label for="wich-line">Sobre qual linha você está falando?</label>
                        <select class="wich-line" id="wich-line">
                            <option value="">Selecione a linha...</option>
                            <option value="">Linha 1 - Azul</option>
                            <option value="">Linha 2 - Verde</option>
                            <option value="">Linha 3 - Vermelha</option>
                            <option value="">Linha 4 - Amarela</option>
                            <option value="">Linha 5 - Lilás</option>
                            <option value="">Linha 6 - Laranja</option>
                            <option value="">Linha 7 - Rubi</option>
                            <option value="">Linha 8 - Diamante</option>
                            <option value="">Linha 9 - Esmeralda</option>
                            <option value="">Linha 10 - Turquesa</option>
                            <option value="">Linha 11 - Coral</option>
                            <option value="">Linha 12 - Safira</option>
                            <option value="">Linha 13 - Jade</option>
                            <option value="">Linha 15 - Prata</option>
                            <option value="">Linha 17 - Ouro</option>
                        </select>
                    </div>

                    <div class="select-group">
                        <label for="situation-line">Qual é a situação?</label>
                        <select class="situation-line" id="situation-line">
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                        </select>
                    </div>
                </div>

                <div class="textarea-container">
                    <textarea placeholder="Conte o que está acontecendo na estação trem ou linha..."></textarea>
                    <span class="char-counter">0/500</span>
                </div>

                <div class="share-footer-actions">
                    <div class="media-buttons">
                        <button type="button" class="btn-media">
                            <img src="/src/assets/images/foto.svg" alt="Ícone de imagem/galeria para adicionar foto">
                            Adicionar foto
                        </button>
                        <button type="button" class="btn-media">
                            <img src="/src/assets/images/video.svg"
                                alt="Ícone de câmera de vídeo para adicionar vídeo">
                            Adicionar vídeo
                        </button>
                    </div>

                    <button type="button" class="btn-publish">
                        <img src="/src/assets/images/publish.svg" alt="Ícone de avião de papel para publicar">
                        PUBLICAR
                    </button>
                </div>
            </div>

        </section>

        <section class="main-right">
            <div class="alert">
                <div class="alert-top-itens">
                    <div class="alert-title">
                        <img src="/src/assets/images/alert.svg" alt="icone de alerta vermelho">
                        <h3>Alertas recentes</h3>
                    </div>
                    <a href="/alerts">Ver todos</a>
                </div>

                <div class="card-alert">
                    <div class="top-card-alert">
                        <div class="line-title">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <p class="line">Linha 4 - Amarela</p>
                            <p class="hour">16:45</p>
                        </div>
                        <div class="signaling">
                            Interrupção
                        </div>
                    </div>
                    <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                        começando a ficar mais
                        lotada.</p>
                    <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
                </div>
                <div class="card-alert">
                    <div class="top-card-alert">
                        <div class="line-title">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <p class="line">Linha 4 - Amarela</p>
                            <p class="hour">16:45</p>
                        </div>
                        <div class="signaling">
                            Interrupção
                        </div>
                    </div>
                    <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                        começando a ficar mais
                        lotada.</p>
                    <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
                </div>
                <div class="card-alert">
                    <div class="top-card-alert">
                        <div class="line-title">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <p class="line">Linha 4 - Amarela</p>
                            <p class="hour">16:45</p>
                        </div>
                        <div class="signaling">
                            Interrupção
                        </div>
                    </div>
                    <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                        começando a ficar mais
                        lotada.</p>
                    <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
                </div>
                <div class="card-alert">
                    <div class="top-card-alert">
                        <div class="line-title">
                            <div class="line-number" style="color: #231F20;">
                                4
                            </div>
                            <p class="line">Linha 4 - Amarela</p>
                            <p class="hour">16:45</p>
                        </div>
                        <div class="signaling">
                            Interrupção
                        </div>
                    </div>
                    <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                        começando a ficar mais
                        lotada.</p>
                    <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
                </div>
            </div>

            <div class="community">
                <div class="community-top-itens">
                    <div class="community-title">
                        <img src="/src/assets/images/community.svg" alt="icone de alerta vermelho">
                        <h3>Comunidade</h3>
                    </div>
                    <a href="/community">Ver todos</a>
                </div>

                <div class="post">

                    <div class="post-top-itens">
                        <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                        <a href="">user_67</a>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="post-content">

                        <div class="line-title line-post">
                            <div class="line-number ">
                                4
                            </div>
                            <p class="line">Linha 5 - Lilas</p>
                        </div>
                        <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                            como se mexer aqui.</p>
                        <div class="like-deslike">
                            <div class="like-deslike">
                                <label class="like">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                        alt="icone de curtir">
                                    12
                                </label>

                                <label class="deslike">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;"
                                        src="/src/assets/images/deslike-red.svg" alt="icone de não curtir">
                                    3
                                </label>

                                <a href="/comentarios" class="comments-link">
                                    <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                    2,4K
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="post">

                    <div class="post-top-itens">
                        <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                        <a href="">user_67</a>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="post-content">

                        <div class="line-title line-post">
                            <div class="line-number ">
                                4
                            </div>
                            <p class="line">Linha 5 - Lilas</p>
                        </div>
                        <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                            como se mexer aqui.</p>
                        <div class="like-deslike">
                            <div class="like-deslike">
                                <label class="like">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                        alt="icone de curtir">
                                    12
                                </label>

                                <label class="deslike">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;"
                                        src="/src/assets/images/deslike-red.svg" alt="icone de não curtir">
                                    3
                                </label>

                                <a href="/comentarios" class="comments-link">
                                    <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                    2,4K
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="post">

                    <div class="post-top-itens">
                        <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                        <a href="">user_67</a>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="post-content">

                        <div class="line-title line-post">
                            <div class="line-number ">
                                4
                            </div>
                            <p class="line">Linha 5 - Lilas</p>
                        </div>
                        <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                            como se mexer aqui.</p>
                        <div class="like-deslike">
                            <div class="like-deslike">
                                <label class="like">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                        alt="icone de curtir">
                                    12
                                </label>

                                <label class="deslike">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;"
                                        src="/src/assets/images/deslike-red.svg" alt="icone de não curtir">
                                    3
                                </label>

                                <a href="/comentarios" class="comments-link">
                                    <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                    2,4K
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="post">

                    <div class="post-top-itens">
                        <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                        <a href="">user_67</a>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="post-content">

                        <div class="line-title line-post">
                            <div class="line-number ">
                                4
                            </div>
                            <p class="line">Linha 5 - Lilas</p>
                        </div>
                        <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                            como se mexer aqui.</p>
                        <div class="like-deslike">
                            <div class="like-deslike">
                                <label class="like">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                        alt="icone de curtir">
                                    12
                                </label>

                                <label class="deslike">
                                    <input type="checkbox">
                                    <img style="background-color: transparent;"
                                        src="/src/assets/images/deslike-red.svg" alt="icone de não curtir">
                                    3
                                </label>

                                <a href="/comentarios" class="comments-link">
                                    <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                    2,4K
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                

            </div>
        </section>

    </main>

    <footer>

        <a href="" class="header-brand footer">
            <img src="/src/assets/images/Icon.svg" alt="logo image">
            <div class="header-brand-text">
                <h1>KeepiMov</h1>
                <p>O metro de SP com você!</p>
            </div>
        </a>

        <div class="info">
            <p class="info-p">Navegação</p>
            <a href="" class="footer-info">Mapas</a>
            <a href="" class="footer-info">Rotas</a>
            <a href="" class="footer-info">Alertas</a>
            <a href="" class="footer-info">Comunidade</a>
            <a href="" class="footer-info">Rotas Salvas</a>
            <a href="" class="footer-info">Perfil</a>
        </div>

        <div class="info">
            <p class="info-p">Sobre</p>
            <a href="" class="footer-info">Quem somos</a>
            <a href="" class="footer-info">Perguntas frequentes</a>
            <a href="" class="footer-info">Termos de uso</a>
            <a href="" class="footer-info">Política de privacidade</a>
        </div>

        <div class="follow-us-att">
            <div class="follow-us">
                <p class="p-footer">Siga a gente</p>
                <div class="social-media">
                    <a href="">
                        <img src="/src/assets/images/instagram.svg" alt="logo Instagram">
                    </a>
                    <a href="">
                        <img src="/src/assets/images/x.svg" alt="logo X">
                    </a>

                    <a href="">
                        <img src="/src/assets/images/tiktok.svg" alt="logo do Tiktok">
                    </a>
                    <a href="">
                        <img src="/src/assets/images/youtube.svg" alt="logo do Youtube">
                    </a>
                </div>


            </div>

            <div class="att">
                <p class="p-footer">Receba Atualizações</p>
                <div class="email-footer">
                    <input type="email" placeholder="Seu email">
                    <button>
                        <img src="/src/assets/images/white-arrow.svg" alt="icone de seta branca">
                    </button>
                </div>
            </div>



        </div>

    </footer>
    `);
}

export function linePage(line) {
  return layout(`Linha ${line.line}`, `
    <h1 style="color: ${line.color}">Bem-vindo à linha ${line.lineNumber} ${line.line}</h1>
  `);
}

export function commentPage() {
  return layout('Comentários', `
    
    <header>
        <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>

        <section class="lines">
            <div class="lines-container">
                <div class="lines-track">


                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </header>


    `);
}

export function profilePage() {
  return layout('Perfil', `
    <header>
         <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>

        <section class="lines">
            <div class="lines-container">
                <div class="lines-track">


                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </header>


    <footer></footer>
    `);
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

export function mapPage() {
  return layout('Mapa', '<h1>Mapa</h1>');
}

export function communityPage() {
  return layout('Comunidade', `
    <header>
        <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>

        <section class="lines">
            <div class="lines-container">
                <div class="lines-track">


                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </header>

    <main>

        <section class="main-left">
            <div class="community-title">
                <img src="/src/assets/images/community.svg" alt="icone de alerta vermelho">
                <h3>Comunidade</h3>
            </div>

            <div class="page-community">

            </div>

            <div class="share-update">

                <div class="share-update-title">
                    <img src="/src/assets/images/add-balloon.svg"
                        alt="Ícone de um balão de conversa com um sinal de mais">
                    <div class="text-top-update">
                        <h3>Compartilhe uma atualização</h3>
                        <p>Ajude outros usuários a se manterem informados sobre o metrô!</p>
                    </div>
                </div>


                <div class="share-selectors-row">
                    <div class="select-group">
                        <label for="wich-line">Sobre qual linha você está falando?</label>
                        <select class="wich-line" id="wich-line">
                            <option value="">Selecione a linha...</option>
                            <option value="">Linha 1 - Azul</option>
                            <option value="">Linha 2 - Verde</option>
                            <option value="">Linha 3 - Vermelha</option>
                            <option value="">Linha 4 - Amarela</option>
                            <option value="">Linha 5 - Lilás</option>
                            <option value="">Linha 6 - Laranja</option>
                            <option value="">Linha 7 - Rubi</option>
                            <option value="">Linha 8 - Diamante</option>
                            <option value="">Linha 9 - Esmeralda</option>
                            <option value="">Linha 10 - Turquesa</option>
                            <option value="">Linha 11 - Coral</option>
                            <option value="">Linha 12 - Safira</option>
                            <option value="">Linha 13 - Jade</option>
                            <option value="">Linha 15 - Prata</option>
                            <option value="">Linha 17 - Ouro</option>
                        </select>
                    </div>

                    <div class="select-group">
                        <label for="situation-line">Qual é a situação?</label>
                        <select class="situation-line" id="situation-line">
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                            <option value="">Selecione a situação...</option>
                        </select>
                    </div>
                </div>

                <div class="textarea-container">
                    <textarea placeholder="Conte o que está acontecendo na estação trem ou linha..."></textarea>
                    <span class="char-counter">0/500</span>
                </div>

                <div class="share-footer-actions">
                    <div class="media-buttons">
                        <button type="button" class="btn-media">
                            <img src="/src/assets/images/foto.svg" alt="Ícone de imagem/galeria para adicionar foto">
                            Adicionar foto
                        </button>
                        <button type="button" class="btn-media">
                            <img src="/src/assets/images/video.svg"
                                alt="Ícone de câmera de vídeo para adicionar vídeo">
                            Adicionar vídeo
                        </button>
                    </div>

                    <button type="button" class="btn-publish">
                        <img src="/src/assets/images/publish.svg" alt="Ícone de avião de papel para publicar">
                        PUBLICAR
                    </button>
                </div>
            </div>

            <div class="post">

                <div class="post-top-itens">
                    <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                    <a href="">user_67</a>
                    <p class="hour">16:45</p>
                </div>
                <div class="post-content">

                    <div class="line-title line-post">
                        <div class="line-number ">
                            4
                        </div>
                        <p class="line">Linha 5 - Lilas</p>
                    </div>
                    <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                        como se mexer aqui.</p>
                    <div class="like-deslike">
                        <div class="like-deslike">
                            <label class="like">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                    alt="icone de curtir">
                                12
                            </label>

                            <label class="deslike">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/deslike-red.svg"
                                    alt="icone de não curtir">
                                3
                            </label>

                            <a href="/comentarios" class="comments-link">
                                <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                2,4K
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div class="post">

                <div class="post-top-itens">
                    <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                    <a href="">user_67</a>
                    <p class="hour">16:45</p>
                </div>
                <div class="post-content">

                    <div class="line-title line-post">
                        <div class="line-number ">
                            4
                        </div>
                        <p class="line">Linha 5 - Lilas</p>
                    </div>
                    <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                        como se mexer aqui.</p>
                    <div class="like-deslike">
                        <div class="like-deslike">
                            <label class="like">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                    alt="icone de curtir">
                                12
                            </label>

                            <label class="deslike">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/deslike-red.svg"
                                    alt="icone de não curtir">
                                3
                            </label>

                            <a href="/comentarios" class="comments-link">
                                <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                2,4K
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div class="post">

                <div class="post-top-itens">
                    <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                    <a href="">user_67</a>
                    <p class="hour">16:45</p>
                </div>
                <div class="post-content">

                    <div class="line-title line-post">
                        <div class="line-number ">
                            4
                        </div>
                        <p class="line">Linha 5 - Lilas</p>
                    </div>
                    <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                        como se mexer aqui.</p>
                    <div class="like-deslike">
                        <div class="like-deslike">
                            <label class="like">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                    alt="icone de curtir">
                                12
                            </label>

                            <label class="deslike">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/deslike-red.svg"
                                    alt="icone de não curtir">
                                3
                            </label>

                            <a href="/comentarios" class="comments-link">
                                <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                2,4K
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div class="post">

                <div class="post-top-itens">
                    <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                    <a href="">user_67</a>
                    <p class="hour">16:45</p>
                </div>
                <div class="post-content">

                    <div class="line-title line-post">
                        <div class="line-number ">
                            4
                        </div>
                        <p class="line">Linha 5 - Lilas</p>
                    </div>
                    <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                        como se mexer aqui.</p>
                    <div class="like-deslike">
                        <div class="like-deslike">
                            <label class="like">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                    alt="icone de curtir">
                                12
                            </label>

                            <label class="deslike">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/deslike-red.svg"
                                    alt="icone de não curtir">
                                3
                            </label>

                            <a href="/comentarios" class="comments-link">
                                <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                2,4K
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div class="post">

                <div class="post-top-itens">
                    <img src="/src/assets/images/perfil.svg" alt=" icone perfil">
                    <a href="">user_67</a>
                    <p class="hour">16:45</p>
                </div>
                <div class="post-content">

                    <div class="line-title line-post">
                        <div class="line-number ">
                            4
                        </div>
                        <p class="line">Linha 5 - Lilas</p>
                    </div>
                    <p>Estou na linha lilas na estação largo treze e o metro não anda de tão lotado que tá, não tem
                        como se mexer aqui.</p>
                    <div class="like-deslike">
                        <div class="like-deslike">
                            <label class="like">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/like-blue.svg"
                                    alt="icone de curtir">
                                12
                            </label>

                            <label class="deslike">
                                <input type="checkbox">
                                <img style="background-color: transparent;" src="/src/assets/images/deslike-red.svg"
                                    alt="icone de não curtir">
                                3
                            </label>

                            <a href="/comentarios" class="comments-link">
                                <img src="/src/assets/images/coments.svg" alt="icone comentários">
                                2,4K
                            </a>

                        </div>
                    </div>
                </div>

            </div>

            
        </section>

        <section class="main-right">
            <div class="alert" style="margin-top: 80px;">
            <div class="alert-top-itens">
                <div class="alert-title">
                    <img src="/src/assets/images/alert.svg" alt="icone de alerta vermelho">
                    <h3>Alertas recentes</h3>
                </div>
                <a href="/alerts">Ver todos</a>
            </div>

            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
            <div class="card-alert">
                <div class="top-card-alert">
                    <div class="line-title">
                        <div class="line-number" style="color: #231F20;">
                            4
                        </div>
                        <p class="line">Linha 4 - Amarela</p>
                        <p class="hour">16:45</p>
                    </div>
                    <div class="signaling">
                        Interrupção
                    </div>
                </div>
                <p class="post-text">Atraso de 8 minutos entre Pinheiros e Faria Lima com isso estação está
                    começando a ficar mais
                    lotada.</p>
                <p class="affects">Afeta : Taboão da Serra → Faria Lima</p>
            </div>
        </div>
        </section>

    </main>
    `);
}

export function alertsPage() {
  return layout('Alertas', `
    
    <header>
        <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>

        <section class="lines">
            <div class="lines-container">
                <div class="lines-track">


                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #004B87;">1</span>
                        <div class="line-info">
                            <span class="line-name">Linha 1 - Azul</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #008060;">2</span>
                        <div class="line-info">
                            <span class="line-name">Linha 2 - Verde</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #EE3E33;">3</span>
                        <div class="line-info">
                            <span class="line-name">Linha 3 - Vermelha</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #ffc107;"></span>
                                <span class="status-text">Velocidade Reduzida</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #FFDE00; color: #231F20;">4</span>
                        <div class="line-info">
                            <span class="line-name">Linha 4 - Amarela</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7A3FA3;">5</span>
                        <div class="line-info">
                            <span class="line-name">Linha 5 - Lilás</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #dc3545;"></span>
                                <span class="status-text">Paralisada</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F7931E;">6</span>
                        <div class="line-info">
                            <span class="line-name">Linha 6 - Laranja</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9A145C;">7</span>
                        <div class="line-info">
                            <span class="line-name">Linha 7 - Rubi</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9C9E9F;">8</span>
                        <div class="line-info">
                            <span class="line-name">Linha 8 - Diamante</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A9A5;">9</span>
                        <div class="line-info">
                            <span class="line-name">Linha 9 - Esmeralda</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #007681;">10</span>
                        <div class="line-info">
                            <span class="line-name">Linha 10 - Turquesa</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #F37032;">11</span>
                        <div class="line-info">
                            <span class="line-name">Linha 11 - Coral</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #0B3A70;">12</span>
                        <div class="line-info">
                            <span class="line-name">Linha 12 - Safira</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #00A859;">13</span>
                        <div class="line-info">
                            <span class="line-name">Linha 13 - Jade</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #7D8285;">15</span>
                        <div class="line-info">
                            <span class="line-name">Linha 15 - Prata</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>

                    <a class="line-card" href="/alerts">
                        <span class="circulo-numero" style="background-color: #9D8A4E;">17</span>
                        <div class="line-info">
                            <span class="line-name">Linha 17 - Ouro</span>
                            <div class="line-status">
                                <span class="status-dot" style="background-color: #28a745;"></span>
                                <span class="status-text">Normal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </header>

    <main class="alerts-dashboard">
        <section class="main-left">
            <div class="alert-title">
                <img src="/src/assets/images/alert.svg" alt="icone de alerta vermelho">
                <h2>Alertas Recentes</h2>
            </div>

           <div class="alerts-grid">
                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Operação normalizada na Linha 2 - Verde</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-1">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-1" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 2 - Verde</h3>
                        <p class="alert-description">Operação normalizada na Linha 2 - Verde</p>
                        <h5>Ocorrência e Impacto Operacional</h5>
                        <p class="detail-info">O incidente teve início por volta das 7h15, período de pico da manhã,
                            quando uma oscilação na rede de energia auxiliar comprometeu temporariamente a comunicação
                            entre o centro de controle operacional e os trens que trafegavam no trecho subterrâneo. Como
                            medida de segurança para evitar aproximações indesejadas e garantir a integridade dos
                            usuários, os trens passaram a circular com velocidade reduzida e intervalos maiores entre as
                            estações Vila Madalena e Vila Prudente.</p>
                        <h5>Retorno à Normalidade</h5>
                        <p class="detail-info">Por volta das 10h00, o Metrô emitiu um comunicado oficial informando que os intervalos entre
                            os trens haviam retornado à média padrão da linha. A situação nos terminais de integração
                            estabilizou-se rapidamente, e o fluxo de passageiros flui sem retenções desde então. A
                            companhia reforçou que o sistema de sinalização passará por uma verificação preventiva
                            adicional durante a próxima madrugada para garantir a estabilidade contínua da operação.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-1"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-critico">Atraso Crítico</span>
                        <span class="time-alerts">Há 12 min</span>
                    </div>
                    <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-5">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-5" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-critico">Atraso Crítico</span>
                            <span class="time-alerts">Há 12 min</span>
                        </div>
                        <h3>Linha 3 - Vermelha</h3>
                        <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-5"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-alerta">Velocidade Reduzida</span>
                        <span class="time-alerts">Há 15 min</span>
                    </div>
                    <p class="alert-description">Lentidão e maior tempo de parada na Estação Luz</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-2">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-2" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-alerta">Velocidade Reduzida</span>
                            <span class="time-alerts">Há 15 min</span>
                        </div>
                        <h3>Estação Luz</h3>
                        <p class="alert-description">Lentidão e maior tempo de parada na Estação Luz</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-2"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-3">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-3" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 4 - Amarela</h3>
                        <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-3"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-critico">Atraso Crítico</span>
                        <span class="time-alerts">Há 12 min</span>
                    </div>
                    <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-5">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-5" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-critico">Atraso Crítico</span>
                            <span class="time-alerts">Há 12 min</span>
                        </div>
                        <h3>Linha 3 - Vermelha</h3>
                        <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-5"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Operação normalizada na Linha 2 - Verde</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-4">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-4" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 2 - Verde</h3>
                        <p class="alert-description">Operação normalizada na Linha 2 - Verde</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-4"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-3">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-3" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 4 - Amarela</h3>
                        <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-3"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-critico">Atraso Crítico</span>
                        <span class="time-alerts">Há 12 min</span>
                    </div>
                    <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-5">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-5" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-critico">Atraso Crítico</span>
                            <span class="time-alerts">Há 12 min</span>
                        </div>
                        <h3>Linha 3 - Vermelha</h3>
                        <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-5"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-alerta">Velocidade Reduzida</span>
                        <span class="time-alerts">Há 15 min</span>
                    </div>
                    <p class="alert-description">Lentidão e maior tempo de parada na Estação Luz</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-6">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-6" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-alerta">Velocidade Reduzida</span>
                            <span class="time-alerts">Há 15 min</span>
                        </div>
                        <h3>Estação Luz</h3>
                        <p class="alert-description">Lentidão e maior tempo de parada na Estação Luz</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-6"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-3">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-3" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 4 - Amarela</h3>
                        <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-3"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                 <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-critico">Atraso Crítico</span>
                        <span class="time-alerts">Há 12 min</span>
                    </div>
                    <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-5">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-5" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-critico">Atraso Crítico</span>
                            <span class="time-alerts">Há 12 min</span>
                        </div>
                        <h3>Linha 3 - Vermelha</h3>
                        <p class="alert-description">Falha técnica na linha 3 Vermelha Estações Brás e Sé</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-5"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>

                <div class="recents-alerts-card">
                    <div class="top-card-page-alerts">
                        <span class="incident status-normal">Serviço Normal</span>
                        <span class="time-alerts">Há 5 min</span>
                    </div>
                    <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                    <div class="verified-tag">
                        <img src="/src/assets/images/verify.svg" alt="">
                        <span>Verificado por 12 pessoas</span>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="btn-details" popovertarget="alerta-detalhes-7">Ver
                            Detalhes</button>
                        <a href="/community" class="btn-att">Reportar Atualização</a>
                    </div>

                    <div id="alerta-detalhes-7" popover class="details-popover">
                        <div class="top-card-page-alerts">
                            <span class="incident status-normal">Serviço Normal</span>
                            <span class="time-alerts">Há 5 min</span>
                        </div>
                        <h3>Linha 4 - Amarela</h3>
                        <p class="alert-description">Circulação totalmente normalizada na Linha 4-Amarela</p>
                        <p class="detail-info">Aqui entram as informações extras deste alerta.</p>
                        <div class="verified-tag">
                            <img src="/src/assets/images/verify.svg" alt="">
                            <span>Verificado por 12 pessoas</span>
                        </div>
                        <button type="button" class="btn-close" popovertarget="alerta-detalhes-7"
                            popovertargetaction="hide">Fechar</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-right">
            <div class="network-status-card">
                <div class="status-header">
                    <h3>Status da Rede - Visão Geral</h3>
                </div>

                <div class="status-table">
                    <div class="status-table-header">
                        <span>Linhas</span>
                        <span>Status</span>
                    </div>


                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #004B87;">1</span>
                            <span class="line-name">Linha 1 - Azul</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #008060;">2</span>
                            <span class="line-name">Linha 2 - Verde</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #EE3E33;">3</span>
                            <span class="line-name">Linha 3 - Vermelha</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #FFDE00; color: #231F20;">4</span>
                            <span class="line-name">Linha 4 - Amarela</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #7A3FA3;">5</span>
                            <span class="line-name">Linha 5 - Lilás</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #F7931E;">6</span>
                            <span class="line-name">Linha 6 - Laranja</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #9A145C;">7</span>
                            <span class="line-name">Linha 7 - Rubi</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #9C9E9F;">8</span>
                            <span class="line-name">Linha 8 - Diamante</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #00A9A5;">9</span>
                            <span class="line-name">Linha 9 - Esmeralda</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #007681;">10</span>
                            <span class="line-name">Linha 10 - Turquesa</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #F37032;">11</span>
                            <span class="line-name">Linha 11 - Coral</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #0B3A70;">12</span>
                            <span class="line-name">Linha 12 - Safira</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #00A859;">13</span>
                            <span class="line-name">Linha 13 - Jade</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #7D8285;">15</span>
                            <span class="line-name">Linha 15 - Prata</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>

                    <div class="status-row">
                        <div class="line-info-group">
                            <span class="line-number" style="background-color: #9D8A4E;">17</span>
                            <span class="line-name">Linha 17 - Ouro</span>
                        </div>
                        <div class="line-status">
                            <span class="status-dot"></span>
                            <span class="status-text">Normal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer></footer>
    `);
}

export function linesPage(list) {
  const items = list
    .map((item) => `<li><a href="/line?number=${item.lineNumber}">${item.line}</a></li>`)
    .join('');

  return layout('Linhas', `
    <h1>Linhas</h1>
    <form action="/lines/search" method="GET">
      <input type="text" name="term" placeholder="Buscar linha...">
      <button type="submit">Buscar</button>
    </form>
    <ul>${items}</ul>
  `);
}

export function registerPage() {
  return layout('Cadastro', `
    <header>
    <section class="top-itens">
      <a href="/" class="header-brand">
        <img src="/src/assets/images/Icon.svg" alt="logo image">
        <div class="header-brand-text">
          <h1>KeepiMov</h1>
          <p>O metrô de SP com você!</p>
        </div>
      </a>

      <div class="search-box">
        <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
        <input type=" text" placeholder="Para qual linha você quer ir?">
      </div>

      <div class="itens-interact">
        <a href="">
          <img src="/src/assets/images/sino.svg" alt="sino icon">
        </a>
        <a href="">
          <img src="/src/assets/images/megafone.svg" alt="megfone icon">
        </a>
        <button href="">
          <img src="/src/assets/images/lua.svg" alt="lua icon">
        </button>
        <a href="/perfil">
          <img src="/src/assets/images/perfil.svg" alt="perfil image">
        </a>
      </div>
    </section>

  </header>

  <main class="container-cadastro">
    <section class="cadastro-card">
      <h2 class="title-cadastro">Cadastro</h2>
      <form class="cadastro-form">
        <div class="form-line">
          <div>
            <label for="nome">NOME</label>
            <input type="text" placeholder="Insira seu nome" id="nome" name="nome">
          </div>
          <div>
            <label for="usuario">NOME DE USUÁRIO</label>
            <input type="text" placeholder="Insira seu nome de usuário" id="usuario" name="usuario">
          </div>
        </div>


        <div class="form-line">
          <div>
            <label for="email">E-MAIL</label>
            <input type="email" placeholder="Insira seu email" id="email" name="email">
          </div>
          <div>
            <label for="confirmar-email">CONFIRMAR E-MAIL</label>
            <input type="email" placeholder="Confirme o email" id="confirmar-email" name="confirmar-email">
          </div>
        </div>


        <div class="form-line">
          <div>
            <label for="senha">SENHA</label>
            <input type="password" placeholder="Insira sua senha" id="senha" name="senha">
          </div>
          <div>
            <label for="confirmar-senha">CONFIRMAR SENHA</label>
            <input type="password" placeholder="Confirme a senha" id="confirmar-senha" name="confirmar-senha">
          </div>
        </div>

        <button type="submit" class="botao-cadastrar">CADASTRAR</button>
        <p class="login-link">
          Já possui uma conta? <a href="/login">Entrar</a>
        </p>

        <div class="form-divider">
          <span>ou</span>
        </div>

        <div class="social-login">
          <button type="button" class="botao-social">
            <img src="/src/assets/images/google.svg" alt="Google">
            Google
          </button>

          <button type="button" class="botao-social">
            <img src="/src/assets/images/github.svg" alt="GitHub">
            GitHub
          </button>
        </div>

      </form>
    </section>
  </main>

  <footer>

    <a href="" class="header-brand footer">
      <img src="/src/assets/images/Icon.svg" alt="logo image">
      <div class="header-brand-text">
        <h1>KeepiMov</h1>
        <p>O metro de SP com você!</p>
      </div>
    </a>

    <div class="info">
      <p class="info-p">Navegação</p>
      <a href="" class="footer-info">Mapas</a>
      <a href="" class="footer-info">Rotas</a>
      <a href="" class="footer-info">Alertas</a>
      <a href="" class="footer-info">Comunidade</a>
      <a href="" class="footer-info">Rotas Salvas</a>
      <a href="" class="footer-info">Perfil</a>
    </div>

    <div class="info">
      <p class="info-p">Sobre</p>
      <a href="" class="footer-info">Quem somos</a>
      <a href="" class="footer-info">Perguntas frequentes</a>
      <a href="" class="footer-info">Termos de uso</a>
      <a href="" class="footer-info">Política de privacidade</a>
    </div>

    <div class="follow-us-att">
      <div class="follow-us">
        <p class="p-footer">Siga a gente</p>
        <div class="social-media">
          <a href="">
            <img src="/src/assets/images/instagram.svg" alt="logo Instagram">
          </a>
          <a href="">
            <img src="/src/assets/images/x.svg" alt="logo X">
          </a>

          <a href="">
            <img src="/src/assets/images/tiktok.svg" alt="logo do Tiktok">
          </a>
          <a href="">
            <img src="/src/assets/images/youtube.svg" alt="logo do Youtube">
          </a>
        </div>


      </div>

      <div class="att">
        <p class="p-footer">Receba Atualizações</p>
        <div class="email-footer">
          <input type="email" placeholder="Seu email">
          <button>
            <img src="/src/assets/images/white-arrow.svg" alt="icone de seta branca">
          </button>
        </div>
      </div>
    </div>

  </footer>
    `);
}

export function loginPage() {
  return layout('Login', '<h1>Login</h1>');
}

export function adminPage() {
  return layout('Admin', '<h1>Acesso negado</h1>');
}

export function notFoundPage() {
  return layout('404', `
    
    <header>
        <section class="top-itens">
            <a href="/" class="header-brand">
                <img src="/src/assets/images/Icon.svg" alt="logo image">
                <div class="header-brand-text">
                    <h1>KeepiMov</h1>
                    <p>O metrô de SP com você!</p>
                </div>
            </a>

            <div class="search-box">
                <img src="/src/assets/images/lupa-azul.svg" alt="lupa azul icon">
                <input type=" text" placeholder="Para qual linha você quer ir?">
            </div>

            <div class="itens-interact">
                <a href="">
                    <img src="/src/assets/images/sino.svg" alt="sino icon">
                </a>
                <a href="">
                    <img src="/src/assets/images/megafone.svg" alt="megfone icon">
                </a>
                <button href="">
                    <img src="/src/assets/images/lua.svg" alt="lua icon">
                </button>
                <a href="/perfil">
                    <img src="/src/assets/images/perfil.svg" alt="perfil image">
                </a>
            </div>
        </section>
    </header>

    <main class="not-found">

        <h1 class="not-found-title">Página não encontrada!</h1>
        <div class="group-notfound">
            <img class="not-found-image" src="/src/assets/images/404.png" alt="imagem de 404">
            <img class="train-image" src="/src/assets/images/train-image.png" alt="imagem de trem">
        </div>
        <img class="emerald-line" src="/src/assets/images/line.png" alt="linha esmeralda image">

    </main>
    `);
}