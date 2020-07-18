

$("h1").addClass("big-title");




  $("button").addClass("big-title");



  $("h1").text("Bye");



  $("button").html("bye");

  function displayTime() {
     let date = new Date();
     let time = date.toLocaleTimeString();
     if($("h1").hasClass("red-title")){
     $("h1").text(time);
     $("h1").removeClass("red-title");
     $("h1").addClass("green-title");
   }
   else{
     $("h1").text(time);
     $("h1").addClass("red-title");
     $("h1").removeClass("green-title");
   }
  }

  setInterval(displayTime, 1000);
