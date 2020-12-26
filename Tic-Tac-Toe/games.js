var button11 = document.getElementById("click11"),
  count = 0;
X_O(button11)

function X_O(button){
    button.onclick = function(){
        count += 1;
        if (count%2==0){
          button.innerHTML = "X";
        }else{
          button.innerHTML = "O";
        }
        this.onclick=null;
      };
}


document.getElementById("start-game").onclick = function(){  
  document.getElementById("start-game").innerHTML = "Play Again"
  for (let i = 0; i < playingSquares.length; i++) {    
    playingSquares[i].textContent = "";    
    playingSquares[i].addEventListener("click", markingSquare);    
    currentPlayer = "X";    
    updateCurrentPlayer();    
    counter = 0;  
  }}
  start.addEventListener("click", startGame);