var score, roundScore, activePlayer,gamePlay;

init();

document.querySelector('.btn-roll').addEventListener("click",function(){

    if(gamePlay){

    var dice = Math.floor((Math.random()*6)+1);
    
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-'+ dice + '.png';

    if(dice!==1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = dice;
    }else{
       
        nextPlayer();

    }
}
  
})

document.querySelector('.btn-hold').addEventListener("click",function(){

if(gamePlay){
    score[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

    if(score[activePlayer]>=20){
        document.getElementById('name-'+activePlayer).textContent = 'Winner'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
gamePlay=false;
    }
    else{
        nextPlayer();
      }
    }
})

function nextPlayer(){
    
    activePlayer? activePlayer=0 : activePlayer=1;
    roundScore =0;

    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector('.dice').style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click",init);

function init(){
    score = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = "none";
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
document.getElementById('name-0').textContent = "Player - 1";
document.getElementById('name-1').textContent = "Player - 2";
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.add("active");
gamePlay = true;
}