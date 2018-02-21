var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catapps");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

