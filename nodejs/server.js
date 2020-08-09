const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var h = Number(req.body.h);
  var w = Number(req.body.w);
  var result = w/(h*h);
  res.send(result+"");
});

app.listen(3000,function(){
  console.log("server 3000 started");
});
