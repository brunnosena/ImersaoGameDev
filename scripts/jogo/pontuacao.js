class Pontuacao {
  constructor() {
    this.ponto = 0
  }


  exibe() {    
    textAlign(RIGHT)
    fill('#FFF')
    textSize(50)
    text(parseInt(this.ponto), width - 30, 50)
  }

  adicionarPonto() {
    this.ponto = this.ponto + .2
  }
}