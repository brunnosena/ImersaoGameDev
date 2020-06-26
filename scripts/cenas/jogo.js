class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(
      matrizPersonagem, imagemPersonagem, 0,
      30, 110, 135, 220, 270);

    const inimigo = new Inimigo(
      matrizInimigo, imagemInimigo,
      width - 60, 30,
      52, 52, 104, 104, 10);

    const inimigoTroll = new Inimigo(
      matrizInimigoGrande, imagemInimigoTroll,
      width * 2, 0,
      200, 200,
      400, 400, 15);

    const inimigoVoador = new Inimigo(
      matrizInimigoVoador, imagemInimigoVoador,
      width - 52, 200,
      100, 75, 200, 150, 10);

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
    vida.draw();

    personagem.exibe();
    personagem.aplicagravidade();

    const linhaAtual = this.mapa[this.indice]

    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade// parseInt(random(10, 40))

    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {
      this.indice++
      inimigo.reaparece()
      if (this.indice >= this.mapa.length - 1) {
        this.indice = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      console.log('Colidiu')
      vida.perdeVida()
      personagem.tornarInvencivel()

      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        // somDoJogo.stop();
        noLoop()
      }
    } else {
      pontuacao.adicionarPonto();
    }
  }
}