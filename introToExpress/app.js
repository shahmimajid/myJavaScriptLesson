var express = require("express");
var app = express();

// "/" => "Hi There"

app.get("/" , function( req , res){
    res.send("Hi There!");
});




app.listen("3000" , "127.0.0.1" , function(){
    console.log("Server is starting up!!");

});