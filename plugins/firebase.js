import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA-zfj1o0U3YgkhBnRV-xJAqFIkeHhNhWY",
    authDomain: "project-app-b998f.firebaseapp.com",
    projectId: "project-app-b998f",
    storageBucket: "project-app-b998f.appspot.com",
    messagingSenderId: "166586639671",
    appId: "1:166586639671:web:f8224e08dc44598e8ae6b2",
    measurementId: "G-EVBHHCC0S6"
};

let app = null;

if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase;