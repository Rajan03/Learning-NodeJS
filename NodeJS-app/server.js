const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const path = require('path');

// Set Port 
const port = 8000;

// Serving static css files
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/views', express.static(__dirname + '/views'))

// Set view Engine
app.set('view engine', 'hbs')

//load Routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/projects', (req, res) => {
    res.render('projects')
})
app.get('/projects/Project', (req, res) => {
    res.render('EachProject')
})
app.get('/current-project', (req, res) => {
    res.render('current')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});