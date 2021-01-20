const rollresult = document.querySelector('.rollresult')
const player1 = document.querySelector('.p1')
const player2 = document.querySelector('.p2')
const icon4 = document.querySelector('.icon4')
const icon5 = document.querySelector('.icon5')
const currents1 = document.querySelector('.displaycurrentscore1')
const currents2 = document.querySelector('.displaycurrentscore2')
const score1 = document.querySelector('.score1')
const score2 = document.querySelector('.score2')

const newgame = document.querySelector('.newgame')
newgame.addEventListener('click', playNewGame)
const rolldice = document.querySelector('.rolldice')
rolldice.addEventListener('click', displayRollDice)
const hold = document.querySelector('.hold')
hold.addEventListener('click', displayGlobalScore)

let player1Turn = true;
let player2Turn = false;

let currentscore1 = 0;
let currentscore2 = 0;

let globalscore1 = 0;
let globalscore2 = 0;

//nouvelle partie
function playNewGame(){
  let pressnewgame = true
  if(pressnewgame){
    currentscore1 = 0
  }
  if(pressnewgame){
    currentscore2 = 0
  }
  if(pressnewgame){
    globalscore1 = 0
  }
  if(pressnewgame){
    globalscore2 = 0
  }
}

//defintion de style pour les current score
currents1.style.fontSize = "50px"
currents1.style.color = "white"
currents2.style.fontSize = "50px"
currents2.style.color = "white"

function displayRollDice() {
  let roll = Math.floor(Math.random()*6)+1;
  rollresult.innerHTML = `${roll}`
  rollresult.style.fontSize = "100px"
  
  //Résultat d'un lancé ajouté au current score;
  if(player1Turn){
    currentscore1 = currentscore1 + roll
  } else if(player2Turn){
    currentscore1 = 0
  }
  
  if(player2Turn){
    currentscore2 = currentscore2 + roll
  } else if(player1Turn){
    currentscore2 = 0
  }
  
  currents1.innerHTML = `${currentscore1}`
  currents2.innerHTML = `${currentscore2}`
  
  //définition du tour de jeu
  if(player1Turn && roll === 1){
    player1Turn = false
    if(player1Turn === false){
      player2Turn = true
    }
  } else if(player2Turn && roll === 1){
    player2Turn = false
    if(player2Turn === false){
      player1Turn = true
    }
  } else if(player1Turn){
    player2Turn = false
  } else if(player1Turn === false){
    player2Turn = true
  }
  
  
  //definition de style pour player1 et player2 en fonction du tour de jeu
  if(player1Turn) {
    player1.style.fontWeight = "normal"
  } else {
    player1.style.fontWeight = "lighter"
  }
  
  if(player2Turn) {
    player2.style.fontWeight = "normal"
  } else {
    player2.style.fontWeight = "lighter"
  }
  if(player1Turn){
    icon4.style.display = "inline-block"
  } else {
    icon4.style.display = "none"
  }
  if(player2Turn){
    icon5.style.display = "inline-block"
  } else {
    icon5.style.display = "none"
  }
}

//Cliquer que le bouton hold pour envoyer les points du current score au global score;
//changement de tour de jeu
function displayGlobalScore(){
  let pressHold = true
  
  if(player1Turn){
    globalscore1 += currentscore1
  }
  if(player2Turn){
    globalscore2 += currentscore2
  }
  
  if (pressHold && player1Turn){
    currentscore1 = 0
  } else if (pressHold && player1Turn){
    player1Turn = false
  }
  
  if (pressHold && player2Turn){
    currentscore2 = 0
  } else if(pressHold && player2Turn){
    player2Turn = false
  }
  
  if(player1Turn && pressHold){
    player1Turn = false
  }
  
  if(player2Turn && pressHold){
    player1Turn = true
  }
  
  //Le premier joueur qui atteint 100 POINTS sur le global score gagne le jeu;
  if(globalscore1 >= 100){
    alert('Le joueur 1 gagne la partie')
  } else if(globalscore2 >= 100){
    alert('Le joueur 2 gagne la partie')
  }
  
  score1.innerHTML = `${globalscore1}`
  score2.innerHTML = `${globalscore2}`
}
