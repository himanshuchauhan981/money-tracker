const { userHandler } = require('../handlers');
const firebase = require('firebase').default;

const user = {
	saveNewUser: async (req, res) => {
		let email = req.body.email;
		let password = req.body.password;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {})
			.catch((error) => {
				if (error.code === 'auth/email-already-in-use') {
					res.status(409).send({ msg: 'Email ID already existed' });
				}
			});
	},
};

module.exports = user;
