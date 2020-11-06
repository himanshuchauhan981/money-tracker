const express = require('express');
const { userController } = require('../controllers');

module.exports = () => {
	const router = express.Router();

	router.post('/signup', userController.save_new_user);

	router.post('/login', userController.login_user);

	router.post('/reset', userController.generate_otp);

	return router;
};
