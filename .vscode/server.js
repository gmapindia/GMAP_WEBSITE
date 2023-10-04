const express = require('express');
const { default: mongoose } = require('mongoose');
const app=express();
//const mongoose=require(mongoose);
//const bodyParser=require("body-parser");

//mongoose.connect("mongodb+srv://paulinenithya:Bless0707*@cluster0.po1bjxq.mongodb.net/Library", { useNewUrlParser: true}, {useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res)
{
    res.sendFile(__dirname +"/home.html");
}
)
app.listen(8080,function()
{
    console.log("server is running");
});