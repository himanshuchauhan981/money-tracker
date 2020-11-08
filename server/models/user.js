const firebase = require('firebase').default;
const admin = require('firebase-admin');

class Users {
	constructor() {
		this.user_auth = firebase.auth();
		this.user_collection = firebase.firestore().collection('users');
		this.admin_auth = admin.auth();
	}

	login_user = (email, password) => {
		return this.user_auth.signInWithEmailAndPassword(email, password);
	};

	create = (email, password) => {
		return this.user_auth.createUserWithEmailAndPassword(email, password);
	};

	add_user = (data) => {
		return this.user_collection.add(data);
	};

	find_by_user_id = (userId) => {
		return this.user_collection.where('userId', '==', userId).get();
	};

	find_by_email_id = (email) => {
		return this.admin_auth.getUserByEmail(email);
	};

	add_otp = (id, otp, current_date) => {
		return this.user_collection.doc(id).set(
			{
				otp: {
					value: otp,
					expiry: current_date,
				},
			},
			{ merge: true }
		);
	};

	update_password = (uid, data) => {
		return this.admin_auth.updateUser(uid, data);
	};
}

module.exports = new Users();
