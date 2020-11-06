const { userHandler } = require('../handlers');

const user = {
	save_new_user: async (req, res) => {
		let userData = req.body;
		let response = await userHandler.save_new_user(userData);
		res.status(response.status).send(response.data);
	},

	login_user: async (req, res) => {
		let email = req.body.email;
		let password = req.body.password;
		let response = await userHandler.login_user(email, password);
		res.status(response.status).send(response.data);
	},

	generate_otp: async (req, res) => {
		let email = req.body.email;
		let response = await userHandler.generate_otp(email);
		res.status(response.status).send(response.msg);
	},
};

module.exports = user;
