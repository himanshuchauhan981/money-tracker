const express = require('express');

module.exports = () => {
	const router = express.Router();

	router.post('/signup', (req, res) => {
		res.status(200).send({ msg: 'signup successfull' });
	});

	return router;
};
