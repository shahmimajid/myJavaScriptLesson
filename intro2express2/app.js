var express = require("express");

var app = express();

app.get("/speak/:animal" , function(req , res){
    var sounds = {
        cow: "Moo",
        dog: "Woof Woof!",
        cat:  "I hate you human",
        goldfish: "..."
    }

    var animal = req.params.animal;
    var sound = sounds[animal];
    console.log(animal);
    console.log(sound);
    res.send("The " + animal + " says '" + sound + "'" );
});

//route
/* app.get("/" , function(req , res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/panda" , function(req , res){
    res.send("The panda says 'Ooooho'")
});

app.get("/speak/cow" , function(req , res){
    res.send("The cow says 'Moo'")
});

app.get("/speak/dog" , function(req , res){
    res.send("The dog says 'Woof Woof!'")
}); */

app.get("/repeat/:message/:times" , function(req , res){
    console.log(req.params);
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0 ; i < times; i++){
        result += message + " ";
    }
    res.send(result)
});


app.get("*" , function(req , res){
    res.send("Sorry, page not found..What are you doing with your life")
});





//Listen
app.listen("3000" , "127.0.0.1" , function(){
    console.log("Server is up");
});