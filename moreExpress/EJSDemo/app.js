var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");


app.get("/" , function(req , res){
    //res.send("Welcome to Homepage");
    //res.send("<h1>Welcome</h1>");
    res.render("home");
})

app.get("/fallinlovewith/:thing" , function(req , res){
    var thing = req.params.thing;
    res.render("love" , { thingVar:thing});
    
});

app.get("/posts" , function(req , res){
    var posts = [
        {title: "POST 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    res.render("posts" , {posts:posts});
    
});


app.listen("3000" , "127.0.0.1" , function(){
    console.log("Starting the App");
});