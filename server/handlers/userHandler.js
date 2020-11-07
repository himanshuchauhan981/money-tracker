const { authenticator } = require('otplib');
const firebase = require('firebase').default;
const admin = require('firebase-admin');

const { sender, transporter } = require('../config/mail');
const { auth } = require('firebase-admin');

const user = {
	save_new_user: async (userData) => {
		let email = userData.email;
		let password = userData.password;

		try {
			let credentials = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			let db = firebase.firestore();
			await db.collection('users').add({
				mobileNumber: userData.mobile_number,
				name: userData.name,
				userId: credentials.user.uid,
			});
			let token = await credentials.user.getIdToken();
			return { status: 200, data: { token } };
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				return { status: 409, data: { msg: 'Email ID already existed' } };
			}
		}
	},
	login_user: async (email, password) => {
		try {
			let credentials = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			let token = await credentials.user.getIdToken();
			return { status: 200, data: { token } };
		} catch (error) {
			if (error.code === 'auth/wrong-password') {
				return { status: 401, data: { msg: 'Wrong credentials' } };
			} else if (error.code === 'auth/too-many-requests') {
				return {
					status: 200,
					data: { msg: 'Too many request. Try again later' },
				};
			}
		}
	},

	generate_otp: async (email) => {
		const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
		const token = authenticator.generate(secret);
		console.log(typeof token);
		console.log(token);
		console.log(authenticator.verify({ token, secret }));
		let current_date = new Date();
		current_date.setMinutes(current_date.getMinutes() + 10);
		let mailOptions = {
			to: email,
			from: sender,
			subject: 'Examiner confirmation mail',
			text: `OTP is ${token}`,
		};
		transporter.sendMail(mailOptions);
		try {
			let userDetails = await admin.auth().getUserByEmail(email);
			let uid = userDetails.uid;
			let userSnapshot = await firebase
				.firestore()
				.collection('users')
				.where('userId', '==', uid)
				.get();
			userSnapshot.docs.forEach(async (doc) => {
				await firebase
					.firestore()
					.collection('users')
					.doc(doc.id)
					.set(
						{ otp: { value: token, expiry: current_date } },
						{ merge: true }
					);
			});
			return {
				status: 200,
				msg: { otp_expiry: current_date },
			};
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				return { status: 404, msg: 'Provided email Id is not registered' };
			}
		}
	},

	verify_otp: async (user_data) => {
		const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
		let userDetails = await admin.auth().getUserByEmail(user_data.email);
		let uid = userDetails.uid;
		let userSnapshot = await firebase
			.firestore()
			.collection('users')
			.where('userId', '==', uid)
			.get();
		let data = userSnapshot.docs[0].data();
		let stored_otp = data.otp.value;
		let expiry_time = data.otp.expiry.seconds;
		let current_date = new Date();
		if (stored_otp === user_data.otp) {
			if (expiry_time > current_date.getTime() / 1000) {
				return { status: 200, data: { msg: 'OTP verified' } };
			} else {
				return { status: 200, data: { msg: 'OTP expired' } };
			}
		} else {
			return { status: 200, data: { msg: 'Invalid OTP' } };
		}
	},
};

module.exports = user;
