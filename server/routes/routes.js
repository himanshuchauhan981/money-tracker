const express = require('express');
const { userController } = require('../controllers');

module.exports = () => {
	const router = express.Router();

	router.post('/signup', userController.save_new_user);

	return router;
};
