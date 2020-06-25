class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    personagem = new Personagem(
      matrizPersonagem, imagemPersonagem, 0,
      30, 110, 135, 220, 270);

    const inimigo = new Inimigo(
      matrizInimigo, imagemInimigo,
      width - 60, 30,
      52, 52, 104, 104, 10, 50);

    const inimigoTroll = new Inimigo(
      matrizInimigoGrande, imagemInimigoTroll,
      width * 2, 0,
      200, 200,
      400, 400, 15, 50);

    const inimigoVoador = new Inimigo(
      matrizInimigoVoador, imagemInimigoVoador,
      width - 52, 200,
      100, 75, 200, 150, 10, 50);

    inimigos.push(inimigo, inimigoTroll, inimigoVoador);
  }

  keyPress(key) {
    if (key === 'ArrowUp') {
      somDoPulo.play();
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    pontuacao.exibe();

    personagem.exibe();
    personagem.aplicagravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {
      this.inimigoAtual++
      if (this.inimigoAtual >= inimigos.length) {
        this.inimigoAtual = 0
      }
      inimigo.velocidade = parseInt(random(10, 40))
    }

    if (personagem.estaColidindo(inimigo)) {
      console.log('Colidiu')
      image(imagemGameOver, width / 2 - 200, height / 3);
      somDoJogo.stop();
      noLoop()
    } else {
      pontuacao.adicionarPonto();
    }
  }
}