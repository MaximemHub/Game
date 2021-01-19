
// A chaque tour le joueur a son current score initialisé a 0;

//Cliquer que le bouton hold pour envoyer les points du current score au global score;
//changement de tour de jeu;


//Le premier joueur qui atteint 100 POINTS sur le global score gagne le jeu;



let rollresult = document.querySelector('.rollresult')
let player1 = document.querySelector('.p1')
let player2 = document.querySelector('.p2')
let icon4 = document.querySelector('.icon4')
let icon5 = document.querySelector('.icon5')
let currents1 = document.querySelector('.displaycurrentscore1')


const rolldice = document.querySelector('.rolldice')
rolldice.addEventListener('click', displayRollDice)

let player1Turn = true;
let player2Turn = false;

let currentscore1 = 0
//Résultat d'un lancé ajouté au current score;

function displayRollDice() {
  let roll = Math.floor(Math.random()*6)+1;
  currentscore1 = currentscore1 + roll
  currents1.innerHTML = `${currentscore1}`
  currents1.style.fontSize = "50px"
  currents1.style.color = "white"
  rollresult.innerHTML = `${roll}`
  rollresult.style.fontSize = "100px"
  
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
  } 
  
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
  
}








// Si le joueur obtient un 1 son current score est perdu et c'est la fin de son tour