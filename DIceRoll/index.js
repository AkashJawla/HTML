var randomnumber = Math.floor(Math.random()*6)+1;
var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomnumberDice = "images/dice" + randomnumber + ".png";

document.querySelector(".img1")["src"]=randomnumberDice;

randomnumberDice = "images/dice" + randomnumber1 + ".png";

document.querySelector(".img2")["src"]=randomnumberDice;

if(randomnumber==randomnumber1)
    document.querySelector("h1").innerHTML="Draw";
else if (randomnumber>randomnumber1)
    document.querySelector("h1").innerHTML="Player 1 wins";
else
    document.querySelector("h1").innerHTML="Player 2 wins";
