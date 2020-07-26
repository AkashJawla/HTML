var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;


function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
level = level + 1;
$("#level-title").text("Level " + level);
//console.log(gamePattern);
}

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});

function playSound(name){
  (new Audio("sounds/" + name + ".mp3")).play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);
}

function gameOver(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
}

function startOver(){
  $("#level-title").text("Game Over, Press 'A' Key to Restart");
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

$(document).on("keydown",function(e){
  if(level === 0 && e.key.toLowerCase() =="a"){
    nextSequence();}
});

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("success");
    if(gamePattern.length == currentLevel+1){
      userClickedPattern=[];
      setTimeout(nextSequence,1000);
    }
  }
  else{
    playSound("wrong");
    gameOver();
    startOver();
    console.log("fail");
  }


}
