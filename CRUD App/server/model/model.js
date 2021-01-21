const Mongoose = require('mongoose');

var schema = new Mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	Gender: {
		type: String,
		required: true
	},
	Contact: {
		type: Number,
		required: true
	},
	Address: {
		type: String,
		required: true
	}
})
const Userdb = Mongoose.model('userdb',schema)
module.exports = Userdb