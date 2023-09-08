const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')
const jsxViewEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.set('views', "./views")
app.engine('jsx', jsxViewEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon })
})

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});