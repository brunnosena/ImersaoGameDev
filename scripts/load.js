
function preload() {
  fita = loadJSON('./fita/fita.json')

  imagemTelaInicial = loadImage('./assets/imagens/assets/telaInicial.png')
  fontTelaInicial = loadFont('./assets/imagens/assets/fonteTelaInicial.otf')
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('./assets/imagens/inimigos/troll.png')
  imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png')
  imagemVida = loadImage('./assets/imagens/assets/coracao.png')

  somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./assets/sons/somPulo.mp3');
}