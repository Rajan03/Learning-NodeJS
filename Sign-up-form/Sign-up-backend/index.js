const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrl = require("./Routes/routes");
const modelSchema = require("./Models/signupModel");
const cors = require('cors')
const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(()=>{
    console.log(`connection to database established`)
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrl)
app.listen(8000, () => {
  console.log("server is running at port 8000");
});
