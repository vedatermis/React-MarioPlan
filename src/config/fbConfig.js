import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMcQOzyl11Uj3lT9FShOnGN_JiZw67Pk8",
    authDomain: "net-ninja-marioplan-1039a.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-1039a.firebaseio.com",
    projectId: "net-ninja-marioplan-1039a",
    storageBucket: "net-ninja-marioplan-1039a.appspot.com",
    messagingSenderId: "262045372174"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings( { timestampsInSnapshots: true } );

  export default firebase;