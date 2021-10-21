let express=require("express");
let fs=require("fs");
const request = require('request');
const requests = require('requests');
const path=require("path");
const app=express();
const port=8080;
const hbs=require("hbs");
const tempPath= path.join(__dirname ,("../templates/views"));
const staticPath=path.join(__dirname , "../public");
const partialPath=path.join(__dirname , "../templates/partial");

//node JS
app.set("view engine" , "hbs");
app.set('views' , tempPath);    
hbs.registerPartials(partialPath); 

request('https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=b4183ad67939026b21a012f65ac97348')
.on('data' , (chunk)=>{
  const jsonData=JSON.parse(chunk);
  const Cname=jsonData.name;
  app.get("/" , (req, res)=>[
    res.render("index" , jsonData)
  ]);
  app.get("/weather" , (req, res)=>[
    res.render("weather" , jsonData)
  ]); 
});
app.get("/about" , (req,res)=>{
  res.send(fs.readFileSync(pages1 , "utf-8"));

});
app.get("/contact" , (req,res)=>{
  res.render("contact");
});
app.get("*" , (req,res)=>{
  res.send("<h1>404 Page Error. Please check url again!!!!");
});
app.listen(port , ()=>{
  console.log("Yes YOur Server GOod Very Good its working now");
});  