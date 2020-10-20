import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1yMMOrCaCVtSN5rhwdzSch2O7_c12eBY",
  authDomain: "facebook-mern-clone-22737.firebaseapp.com",
  databaseURL: "https://facebook-mern-clone-22737.firebaseio.com",
  projectId: "facebook-mern-clone-22737",
  storageBucket: "facebook-mern-clone-22737.appspot.com",
  messagingSenderId: "453417083421",
  appId: "1:453417083421:web:4f1390443225004cf25cf4",
  measurementId: "G-VGZET078M2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
