const Mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', 'config.env')});

const connectDB = async ()=>{
	try{
		// MongoDB connection 
		const con = await Mongoose.connect(process.env.MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		})
		console.log(`MogoDB Connected`)
	}catch(err) {
		console.log(err);
		process.exit(1);
	}
}
module.exports = connectDB