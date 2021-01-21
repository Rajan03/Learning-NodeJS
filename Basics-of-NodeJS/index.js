const express = require('express')
const pug = require('pug');
const app = express()
const port = 3000

// const data = fs.readFileSync("\", ./index.js)
app.get('/Home', (req, res) => {
    res.render('../index.pug')
})
app.get('/contact', (req, res) => {
    res.render('../contact.pug')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/home`)
})