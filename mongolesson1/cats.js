var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catapps");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat" , catSchema);
 //adding a new cat to the DB

 var george = new Cat({
                 name: "Cici",
                 age: 2,
                 temperament: "Grougcy"

 });

 george.save(function (err , cat ){
     if (err){
         console.log("SOMETHING WENT WRONG!");
     }
     else {
         console.log("WE JUST SAVED A CAT TO THE DB");
         console.log(cat);
     }
 });