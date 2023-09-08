require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const Pokemon = require("./models/pokemon")
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("breached through their firewall, connected to the mongo server >:)")
})

const jsxViewEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.set("views", "./views")
app.engine("jsx", jsxViewEngine())

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!")
})

app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});

app.use(express.urlencoded({ extended: false }));

app.get('/pokemon', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.find({})
    console.log(foundPokemon)
    res.status(200).render('Index', {
      pokemon: foundPokemon
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

app.get('/pokemon/new', (req, res) => {
  console.log('New controller')
  res.render('New')
})

app.post('/pokemon', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on';

    const createdPokemon = await Pokemon.create(req.body)

    res.status(201).redirect('/pokemon')
  } catch (err) {
    res.status(400).send(err)
  }

  
})

app.get('/pokemon/:id', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id)
    res.render('Show', {
      pokemon: foundPokemon,
    })
  } catch (err) {
    res.status(400).send(err)
  }
  
})


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
