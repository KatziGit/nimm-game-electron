/**
 * @file Auth.js
 * @desc Class for handeling authentication things
 * @author AH
 */

export default class Auth {

	static AuthErrorTypes = {
		EmptyUsername : 'emptyUsername',
		InvalidUsername : 'invalidUsername',
		EmptyPassword : 'emptyPassword',
		EmptyCode : 'emptyCode',
		SignUpError : 'signUpError',
		SignInError : 'signInError',
		Default : 'default',
	}

	/**
	 *
	 * @param usernameOrSignInOpts
	 * @returns {Promise<void>}
	 */
	static async signIn(usernameOrSignInOpts) {
		let username = usernameOrSignInOpts;

		if (!username) {
			return this.rejectAuthError(this.AuthErrorTypes.EmptyUsername);
		}

		let authDetails = {
			name: username,
		};

		return this.finishSignIn(authDetails);
	}

	/**
	 *
	 * @param authDetails
	 * @returns {null|Promise<unknown>|*}
	 */
	static finishSignIn(authDetails) {
		this.pendingSignIn = new Promise((resolve, reject) => {
			localStorage.setItem('username', authDetails.name)
			resolve();
		});

		return this.pendingSignIn;
	}

	/**
	 *
	 * @returns {Promise<void>}
	 */
	static async signOut() {
		try {
			delete this.pendingSignIn;

			localStorage.removeItem('username');
		} catch (e) { }
	}

	/**
	 *
	 * @returns {Promise<void>}
	 */
	static async currentSession() {
		return new Promise((resolve, reject) => {
			if (!localStorage.getItem('username')) {
				return reject();
			} else {
				return resolve();
			}
		});
	}

	/**
	 *
	 * @param type
	 * @returns {Promise<never>}
	 */
	static rejectAuthError(type) {
		return Promise.reject(type);
	}
}