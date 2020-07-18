for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    keypressed(this.innerHTML);

    btnanimation(this.innerHTML);

  });
}

document.addEventListener("keydown", function() {
  keypressed(event.key);
  btnanimation(event.key);
})

function keypressed(i) {
  var audio;
  switch (i) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      console.log("nope!!");
  }
  audio.play();
}

function btnanimation(btn) {
  var btnpressed = document.querySelector("." + btn);
  btnpressed.classList.add("pressed");
  setTimeout(function() {
    btnpressed.classList.remove("pressed")
  }, 100);

}
