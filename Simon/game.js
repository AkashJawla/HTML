var gamePattern = []
var buttonColours = [ "red", "blue", "green", "yellow" ];
var randomChosenColour
var randomNumber;
var userClickedPattern = [];


function nextSequence(){
  randomNumber = Math.floor((Math.random() * 4));
}

nextSequence();
randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

console.log(gamePattern);

$("#"+gamePattern).fadeOut(100).fadeIn(100);
(new Audio("sounds/" + gamePattern[0] + ".mp3")).play();

$(".btn").on("click",function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
