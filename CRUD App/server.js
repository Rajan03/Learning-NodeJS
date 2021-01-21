const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');

//MongoDB Connections
connectDB();

// setting PORt using dotenv file
dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 8080;

// Parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set View Engine
app.use(express.static(path.join(__dirname, 'build')));

// load routers
app.use('/', require('./server/routes/router'))

// To start server at defined port 
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});