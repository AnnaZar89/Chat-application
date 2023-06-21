import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAVRXSb-TftpbfZnMjS8uuwp0Tc35E6t_M",
    authDomain: "unichat-ba753.firebaseapp.com",
    projectId: "unichat-ba753",
    storageBucket: "unichat-ba753.appspot.com",
    messagingSenderId: "470679483896",
    appId: "1:470679483896:web:3bc82593e9352cc92c120d"
  }).auth();

  //we create firebase instance here