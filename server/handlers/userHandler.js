const { authenticator } = require('otplib');

const { userModel } = require('../models');
const { sender, transporter } = require('../config/mail');
const { reset_password } = require('../controllers/userController');

let create_one_time_password = () => {
	let secret = process.env.OTP_SECRET;
	let otp = authenticator.generate(secret);
	return otp;
};

let send_otp_email = (otp, email) => {
	let current_date = new Date();
	current_date.setMinutes(current_date.getMinutes() + 10);
	let mailOptions = {
		to: email,
		from: sender,
		subject: 'Password reset email',
		text: `OTP is ${otp}`,
	};
	transporter.sendMail(mailOptions);
	return current_date;
};

let verify_otp = (stored_otp, new_otp, expiry_time) => {
	let current_date = new Date();

	if (stored_otp === new_otp) {
		if (expiry_time > current_date.getTime() / 1000) {
			return { status: 200, data: { msg: 'OTP verified' } };
		} else {
			return { status: 200, data: { msg: 'OTP expired' } };
		}
	} else {
		return { status: 200, data: { msg: 'Invalid OTP' } };
	}
};

const user = {
	save_new_user: async (userData) => {
		let email = userData.email;
		let password = userData.password;

		try {
			let credentials = await userModel.create(email, password);
			await userModel.add_user({
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
			let credentials = await userModel.login_user(email, password);
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
		let otp = create_one_time_password();
		let current_date = send_otp_email(otp, email);
		try {
			let userDetails = await userModel.find_by_email_id(email);

			let userSnapshot = await userModel.find_by_user_id(userDetails.uid);
			userSnapshot.docs.forEach(async (doc) => {
				await userModel.add_otp(doc.id, otp, current_date);
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
		let userDetails = await userModel.find_by_email_id(user_data.email);

		let userSnapshot = await userModel.find_by_user_id(
			userDetails.uid,
			userDetails
		);
		let data = userSnapshot.docs[0].data();

		let stored_otp = data.otp.value;
		let expiry_time = data.otp.expiry.seconds;
		let response = verify_otp(stored_otp, user_data.otp, expiry_time);
		return response;
	},

	update_password: async (email, password) => {
		let user_credential = await userModel.find_by_email_id(email);
		await userModel.update_password(user_credential.uid, { password });
		return { status: 200, data: { msg: 'Password changed successfully' } };
	},
};

module.exports = user;
