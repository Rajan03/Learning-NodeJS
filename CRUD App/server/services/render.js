const path = require('path');
const axios = require('axios');

exports.homeRoutes = (req, res) => {
	axios.get('http://localhost:8000/api/users')
	.then(response => response.json())
  	.then((data) => {
  		console.log(data)
  		res.render(path.join(__dirname, '..', '..', 'build', 'index.html'));
  	})
  	.catch(err => console.log(err))
}