/// <reference path="./p5.global-mode.d.ts" />

"use strict";

let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  
  // somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate (40);
  // somDoJogo.loop();  
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}