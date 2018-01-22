import * as firebase from 'firebase'
let database
export const init = () => {
	let config = {
		apiKey: 'AIzaSyCDxQl0w9aadzFSzgGj7HOrZ6RSIKgAiEo',
		authDomain: 'budget-app-29c3e.firebaseapp.com',
		databaseURL: 'https://budget-app-29c3e.firebaseio.com',
		projectId: 'budget-app-29c3e',
		storageBucket: 'budget-app-29c3e.appspot.com',
		messagingSenderId: '684508515772'
	}
	firebase.initializeApp(config)
	database = firebase.database()
};
