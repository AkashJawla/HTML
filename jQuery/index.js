

$("h1").addClass("big-title");

$("button").attr("class","big-title");

$("button").attr("class","red-title");

$("h1").click(function(){
  $("button").css("color","blue");
});

$(document).keydown(function(e){
  $("h1").html($("h1").html()+e.key);
  $("h1").css("color","purple");
});

$("h1").on("click",function(){
  $("button").css("color","green");
  $("h1 button").remove();
});

$(document).on("keyup",function(e){
  $("h1").css("color","green");
});

$("button").on("click",function(){
  $("h1").append("<button>new</button>");
});


  $("h1").text("Bye");

  $("button").html("bye");

  // function displayTime() {
  //    let date = new Date();
  //    let time = date.toLocaleTimeString();
  //    if($("h1").hasClass("red-title")){
  //    $("h1").text(time);
  //    $("h1").removeClass("red-title");
  //    $("h1").addClass("green-title");
  //  }
  //  else{
  //    $("h1").text(time);
  //    $("h1").addClass("red-title");
  //    $("h1").removeClass("green-title");
  //  }
  // }

//  setInterval(displayTime, 1000);
