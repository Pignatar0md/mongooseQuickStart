var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dbformongoose");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "error al conectar mongoose a mongodb"));
db.once("open", () => {
  console.log("nos conectamosss");

  var KittySchema = mongoose.Schema({
  	name: String
  });
  var Kitten = mongoose.model("Kitten", KittySchema);

  var Silence = new Kitten({name: 'Silence'});

  KittySchema.methods.speak = () => {
  	var greeting = this.name ? "Meow name is " + this.name : "I don't have a name :(";
  	console.log(greeting);
  }
  

  var Fluffy = new Kitten({name: 'Fluffy'});
  Fluffy.speak();

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
      fluffy.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
      console.log("Kittens found by Kitten.find() "+kittens);
  });

  Kitten.find({ name: /^Fluff/ }, (kitten) => {
  	console.log(kitten[0]);
  });

});

