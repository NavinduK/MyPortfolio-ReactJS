import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAUqhLtmwK3t4GNS7GihxiLmuZCH1znHXY',
	authDomain: 'myportfolio-reactjs-e5f78.firebaseapp.com',
	databaseURL: 'https://myportfolio-reactjs-e5f78.firebaseio.com',
	projectId: 'myportfolio-reactjs-e5f78',
	storageBucket: 'myportfolio-reactjs-e5f78.appspot.com',
	messagingSenderId: '376047585445',
	appId: '1:376047585445:web:05e85a35392830b3c2254c',
	measurementId: 'G-ZM0X2G52XN',
};

firebase.initializeApp(config);

export default firebase;