import * as firebase from "firebase";
// import { FirebaseConfig } from "../config/keys";
const config = {
    apiKey: "AIzaSyBMQJr8vAhI_Uu_JQnvjgszNEyo38Gas4I",
    authDomain: "react-redux-fb-poc.firebaseapp.com",
    databaseURL: "https://react-redux-fb-poc.firebaseio.com",
    projectId: "react-redux-fb-poc",
    storageBucket: "react-redux-fb-poc.appspot.com",
    messagingSenderId: "780497553531"
};

firebase.initializeApp(config);
export default firebase;