const express = require("express");
require('dotenv').config();
const app = express();
const Pokemon = require("./models/pokemon.js");
const mongoose = require('mongoose')


app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // remove useCreateIndex: true
  });
  
  mongoose.connection.once("open", () => {
    console.log("connected to mongoDB");
  });

//MIDDLEWARE
app.use((req, res, next)=>{
    console.log('I run for all routes!')
    next();
})
//this allows the body of a post request
app.use(express.urlencoded({extended: false}))


//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});
//Index
app.get("/pokemon", async function (req, res) {
    const foundPokemon = await Pokemon.find({});
  res.render("Index", {
    pokemon: foundPokemon,
  });
});


//New
app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})

//CREATE = POST
app.post('/pokemon', async (req, res)=>{
  const newPokemon =  await Pokemon.create({
    name: req.body.name,
    img: "https://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
  })
    
    console.log(newPokemon);
  //pokemon.push(newPokemon)
    res.redirect('/pokemon');
});

//Show
app.get("/pokemon/:id", async (req, res) => {
    const onePokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
      pokemon: onePokemon,
    });
  });


app.get('/pokemon/:id', (req, res)=> {
    res.send(req.params.id);
})

app.listen(3000, (req, res) => {
  console.log("listening");
});
