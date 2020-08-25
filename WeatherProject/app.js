const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=noida&appid=2a32b1f5d0fcb57bfc6aa02410e602f0&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const tempDesc = weatherData.weather[0].description;
      const city = weatherData.name;
      const weatherIcon = weatherData.weather[0].icon;
      const icon = "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";

      res.write("<p>"+tempDesc+"</p>");
      res.write("<h1>Temperature in "+city+" is "+temp+" celcius</h1>");
      res.write("<img src='"+icon+"'>");
      res.send();
    });
  });

})

app.listen(3000,function(){
  console.log("Server running");
})
