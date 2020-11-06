const { authenticator } = require('otplib');
const { userHandler } = require('../handlers');
const { sender, transporter } = require('../config/mail');

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

		const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
		const token = authenticator.generate(secret);
		let mailOptions = {
			to: email,
			from: sender,
			subject: 'Examiner confirmation mail',
			text: `OTP is ${token}`,
		};
		transporter.sendMail(mailOptions);

		res.status(200).send({ msh: 'hello' });
	},
};

module.exports = user;
