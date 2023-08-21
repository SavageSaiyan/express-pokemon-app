const express = require("express");
const app = express();

const pokemon = require("./models/pokemon");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


//MIDDLEWARE
app.use((req, res, next)=>{
    console.log('I run for all routes!')
    next();
})
//this allows the body of a post request
app.use(express.urlencoded({extended: false}))



app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});
//Index
app.get("/pokemon", (req, res) => {
  res.render("Index", {
    pokemon: pokemon,
  });
});


//New
app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})

//CREATE = POST
app.post('/pokemon', (req, res)=>{
  const newPokemon = {
    name: req.body.name,
    img: "https://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
  }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})

//Show
app.get("/pokemon/:id", (req, res) => {
    res.render("Show", {
      pokemon: pokemon[req.params.id],
    });
  });


app.get('/pokemon/:id', (req, res)=> {
    res.send(req.params.id);
})

app.listen(3000, (req, res) => {
  console.log("listening");
});
