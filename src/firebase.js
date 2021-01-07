import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBlYhbIiHU1LDKGeeEaqEnxq9SnhXL5dfU",
    authDomain: "fir-auth-developement.firebaseapp.com",
    projectId: "fir-auth-developement",
    storageBucket: "fir-auth-developement.appspot.com",
    messagingSenderId: "827428321973",
    appId: "1:827428321973:web:f5f0c4fdccb018ebe79cfc"

});

const auth = app.auth();
export { auth };
export default app;