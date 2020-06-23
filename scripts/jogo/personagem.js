class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura,
    larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura,
      larguraSprite, alturaSprite)

      this.yInicial = height - altura
      this.y = this.yInicial
      this.velocidadeDoPulo = 0
      this.gravidade = 5
  }

  pula() {
    this.velocidadeDoPulo = -40
  }

  aplicagravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial;

    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao,

      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )

    return colisao;
  }
}