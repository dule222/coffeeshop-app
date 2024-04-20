import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCG05_a7IZ0vWFb-ibQ0itaxEnFVQco_8",
    authDomain: "coffeshop-d52b7.firebaseapp.com",
    projectId: "coffeshop-d52b7",
    storageBucket: "coffeshop-d52b7.appspot.com",
    messagingSenderId: "357957617248",
    appId: "1:357957617248:web:265497c28e7779de55e505",
    measurementId: "G-6VEYYKKLFP"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
