import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//api key from firebase
var config = {
  apiKey: "AIzaSyB4f2UO_oNXCIxJ9z5rlMKElEcgOQ7PCFc",
  authDomain: "slack-cd3ed.firebaseapp.com",
  databaseURL: "https://slack-cd3ed.firebaseio.com",
  projectId: "slack-cd3ed",
  storageBucket: "slack-cd3ed.appspot.com",
  messagingSenderId: "1076790288434"
};
firebase.initializeApp(config);

export default firebase;
