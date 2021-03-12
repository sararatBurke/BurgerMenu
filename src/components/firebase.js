import firebase from 'firebase';
import '@firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.Firebase_API,
    authDomain: "buger-482f2.firebaseapp.com",
    projectId: "buger-482f2",
    storageBucket: "buger-482f2.appspot.com",
    messagingSenderId: "345221422727",
    appId: "1:345221422727:web:86dadd018d5b68446ce222"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;