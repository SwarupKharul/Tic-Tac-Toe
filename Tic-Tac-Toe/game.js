var count = 0;
let button11 = document.getElementById("click11");
let button12 = document.getElementById("click12");
let button13 = document.getElementById("click13");
let button21 = document.getElementById("click21");
let button22 = document.getElementById("click22");
let button23 = document.getElementById("click23");
let button31 = document.getElementById("click31");
let button32 = document.getElementById("click32");
let button33 = document.getElementById("click33");
let tie=0;

let reset=()=>{
  button11.innerHTML="."
  button12.innerHTML="."
  button13.innerHTML="."
  button21.innerHTML="."
  button22.innerHTML="."
  button23.innerHTML="."
  button31.innerHTML="."
  button32.innerHTML="."
  button33.innerHTML="."
  count = 0;
}

var x = 0;
var o = 0;

function check(b1,b2,b3){
  if (b1.innerHTML==b2.innerHTML && b2.innerHTML==b3.innerHTML && b3.innerHTML!='.'){
    setTimeout(() => { alert(b1.innerHTML+' Wins') }, 300);
    setTimeout(() => {reset()}, 300);
    if (b1.innerHTML=='X'){x+=1;}
    else {o+=1;}
    document.getElementById("Player1").innerHTML = x;
    document.getElementById("Player2").innerHTML = o;
  }
  else {tie+=1;}  
  }


function checkWin(){
  check(button11,button12, button13)
  check(button21,button22, button23)
  check(button31,button32, button33)
  check(button11,button21, button31)
  check(button12,button22, button32)
  check(button13,button23, button33)
  check(button11,button22, button33)
  check(button13,button22, button31)
  checkTie()
  tie=0;
}

function checkTie(){
  if (count==9 && tie==8){
    setTimeout(() => {alert("Uff It's a tie ")}, 300);
    setTimeout(() => {reset()}, 300);
    tie=0;
}
}

let X_O=(button)=>{
  button.onclick = function(){
    if(count==8){
      button.innerHTML = "O";
      document.getElementById("turn").innerHTML = "Game has Ended";
      count+=1
      checkWin();
  }
    else if(count%2==1 && button.innerHTML=="." && count!=8){
        button.innerHTML = "X";
        document.getElementById("turn").innerHTML = "Player O plays now";
        count += 1;
        checkWin()
    }
    else if(count%2==0 && button.innerHTML=="." && count!=8){
      button.innerHTML = "O";
      document.getElementById("turn").innerHTML = "Player X plays now";
      count += 1;
      checkWin()
    }
    
}}

X_O(button11);
X_O(button12);
X_O(button13);
X_O(button21);
X_O(button22);
X_O(button23);
X_O(button31);
X_O(button32);
X_O(button33);

document.getElementById("play_again").onclick = ()=>{
  reset()
}
document.getElementById("scoreReset").onclick = ()=>{
  o=0;
  x=0;
  document.getElementById("Player1").innerHTML = x;
  document.getElementById("Player2").innerHTML = o;
}