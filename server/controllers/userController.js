const { userHandler } = require('../handlers');

const user = {
	save_new_user: async (req, res) => {
		let user_data = req.body;
		let response = await userHandler.save_new_user(user_data);
		res.status(response.status).send(response.data);
	},

	login_user: async (req, res) => {
		let email = req.body.email;
		let password = req.body.password;
		let response = await userHandler.login_user(email, password);
		res.status(response.status).send(response.data);
	},

	reset_password: async (req, res) => {
		let query = req.query.type;
		if (query === 'otp_generate') {
			let email = req.body.email;
			let response = await userHandler.generate_otp(email);
			res.status(response.status).send(response.msg);
		} else {
			let user_data = req.body;
			let response = await userHandler.verify_otp(user_data);
			res.status(response.status).send(response.data);
		}
	},

	update_password: async (req, res) => {
		let email = req.query.email;
		let password = req.body.new_password;

		let response = await userHandler.update_password(email, password);
		res.status(response.status).send(response.data);
	},
};

module.exports = user;
