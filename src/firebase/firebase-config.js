import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBdE3Mi4pL-rRwIpZ2DwiC9IRM3CzsNDZ8",
	authDomain: "pokemon-proyectofinal-reactjs.firebaseapp.com",
	projectId: "pokemon-proyectofinal-reactjs",
	storageBucket: "pokemon-proyectofinal-reactjs.appspot.com",
	messagingSenderId: "91715272730",
	appId: "1:91715272730:web:f3f46d53140c4ed84451a3",
	measurementId: "G-5GSXSM5F10",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
