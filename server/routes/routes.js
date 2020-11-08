const express = require('express');
const { userController } = require('../controllers');

module.exports = () => {
	const router = express.Router();

	router.post('/signup', userController.save_new_user);

	router.post('/login', userController.login_user);

	router.post('/password', userController.reset_password);

	router.patch('/password', userController.update_password);

	return router;
};
