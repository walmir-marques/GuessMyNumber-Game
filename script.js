"use strict";

//gerando numero aleatorio de 1 a 20
var number = Math.floor(Math.random() * 20 + 1);
console.log(number);

// variavel para mostrar o score do jogador, a cada palpite errado deve decrementar 1
var score = 20;

// variavel para mostrar o score maximo que o jogador conseguiu fazer na mesma seçao de jogo
var highScore = 0;

// Funcao para mostrar as mensagens na tela para o jogador 
const displayMessage = function(message){
  document.querySelector(".message").textContent = message;
}

// variavel para guardar o elemento responsavel por mostrar a mensagem na tela do score do jogador
var scoreMessage = document.querySelector(".score");

// criando evento de clicar no botao
var btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  // variavel para guardar o valor do palpite do jogador e deixa o campo em braco em seguida
  var guessNumber = document.querySelector(".guess").value;
  document.querySelector(".guess").value = "";

  if (guessNumber <= 0 || guessNumber > 20) {
    displayMessage("Invalid Number!!!");
  } else if (guessNumber < number) {
    displayMessage("Too low !!!");
    score--;
    scoreMessage.textContent = score;
  } else if (guessNumber > number) {
    displayMessage("Too High !!!");
    score--;
    scoreMessage.textContent = score;
  } else if (guessNumber == number) {
    displayMessage("Correct !!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
    //escrever o numero secreto na tela
    document.querySelector(".number").innerHTML = number;
  }
});

//criando o evento listener para o botao de resetar o jogo

var reset = document.querySelector(".again");
reset.addEventListener("click", function () {
  displayMessage("Start guessing...");
  score = 20;
  scoreMessage.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".number").innerHTML = "?";

});
