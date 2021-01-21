var Userdb = require('../model/model');

//  Creaet and save new user
exports.create= (req, res)=>{
	// validate request
	if(!req.body){
		res.status(400).send({
			message: 'Please fill the required inputs'
		});
		return;
	}
	// new user
	const user = new Userdb({
		name:req.body.name,
		email:req.body.email,
		gender:req.body.gender,
		contact:req.body.contact,
		address:req.body.address
	})

	// Svae data in db
	user
		.save(user)
		.then(data =>{
			res.send(data)
		})
		.catch(err =>{
			res.status(500).send({
				message:err.message || 'Some error occured'
			})
		}) 
}

//  Retrive and return all user or single user
exports.find= (req, res)=>{
	if(req.query.id){
		const id = req.query.id;
	Userdb.findById(id)
	.then(data => {
		if(!data){
			res.status(404).send({message: `No User Found`})
		}else{
			res.send(data)
		}
	})
	.catch(err => {
		res.status(500).send({
				message: ' Some error occured while getting user data'
			})
	})
	}else{
		Userdb.find()
		.then(user =>{
			res.send(user)
		})
		.catch(err =>{
			res.status(500).send({
				message:err.message || 'Some error occured while retriving Data'
			})
		}) 
	}
}
//  Update any user by its id
exports.update= (req, res)=>{
	// validate request
	if(!req.body){
		res.status(400).send({
			message: 'Please fill the required inputs'
		});
		return;
	}
	const id = req.params.id;
	Userdb.findByIdAndUpdate(id.req.body,{useFindAndModify: false})
	.then(data => {
		if(!data){
			res.status(404).send({message: `Cannot Update user`})
		}else{
			res.send(data)
		}
	})
	.catch(err => {
		res.status(500).send({
				message: ' Some error occured while updating user data'
			})
	})
}

//  Delete a user with given user id
exports.delete= (req, res)=>{
	const id = req.params.id;

	Userdb.findByIdAndDelete(id)
	.then(data => {
		if(!data){
			res.status(404).send({message: `Error occured while Deleting User`})
		}else{
			res.send({
				message:'User deleted Succesfully'
			})
		}
	})
	.catch(err => {
		res.status(500).send({
				message: ' Some error occured while deleting user data'
			})
	})
}