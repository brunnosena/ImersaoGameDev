class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura,
    larguraSprite, alturaSprite) {
      super(matriz, imagem, x, largura, altura,
        larguraSprite, alturaSprite)

        this.velocidade = 10
    }


    move() {
      this.x = this.x - 7

      if(this.x < -this.largura) {
        this.x = width
      }
    }
}