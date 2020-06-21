import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAX1iIKzPhFzV7jmt694qSckgcvGfACWiQ",
    authDomain: "marioplan-6cfa2.firebaseapp.com",
    databaseURL: "https://marioplan-6cfa2.firebaseio.com",
    projectId: "marioplan-6cfa2",
    storageBucket: "marioplan-6cfa2.appspot.com",
    messagingSenderId: "300625732772",
    appId: "1:300625732772:web:eb0867d8a059e3f21bb231"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase