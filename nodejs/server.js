const express = require("express");

const app = express();

app.get("/bye", function(req,res){
  res.send("hello");
});


app.listen(3000,function(){
  console.log("server 3000 started");
});
