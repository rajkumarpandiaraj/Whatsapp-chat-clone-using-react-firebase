import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwZJBpc9JUNn1jPf4ce8Hh07ecHC0CNJg",
    authDomain: "whatsappclone-6f44a.firebaseapp.com",
    databaseURL: "https://whatsappclone-6f44a.firebaseio.com",
    projectId: "whatsappclone-6f44a",
    storageBucket: "whatsappclone-6f44a.appspot.com",
    messagingSenderId: "105700945148",
    appId: "1:105700945148:web:1b2dee332753339e833b79",
    measurementId: "G-5VRYJ9RT51"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
// firebase deploy --only hosting:rkwatsapp

export {auth, provider} ;
export default db;