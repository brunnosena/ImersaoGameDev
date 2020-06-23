/// <reference path="./p5.global-mode.d.ts" />

"use strict";

let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let personagem;
let inimigo;
let somDoJogo;
let somDoPulo;

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
]

function preload() {
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');

  // somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(
    matrizPersonagem, imagemPersonagem,
    100, 110, 135, 220, 270);

  inimigo = new Inimigo(
    matrizInimigo, imagemInimigo,
    width - 60, 52, 52,
    104, 104);
    
  frameRate(40);
  // somDoJogo.loop();  
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicagravidade();

  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    console.log('Colidiu')
    noLoop()
  }
}

function keyPressed() {
  if (key === 'ArrowUp') {
    somDoPulo.play();
    personagem.pula();
  }
}