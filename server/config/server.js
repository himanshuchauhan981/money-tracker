const dotenv = require('dotenv');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

dotenv.config();
require('../db/init-firebase');
const { HOST, PORT } = require('./config');
const { routes } = require('../routes');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);

app.use('/api', routes());

app.listen(PORT, HOST, (err) => {
	if (err) console.log(err);
	else console.log(`Running on ${HOST}:${PORT}`);
});
