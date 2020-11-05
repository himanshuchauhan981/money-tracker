const firebase = require('firebase').default;

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
};

module.exports = user;
