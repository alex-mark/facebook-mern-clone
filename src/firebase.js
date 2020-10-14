import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLrI8hgBhMDm_jIwXjXAFI_GN7CJVPXqI",
  authDomain: "facebook-clone-61815.firebaseapp.com",
  databaseURL: "https://facebook-clone-61815.firebaseio.com",
  projectId: "facebook-clone-61815",
  storageBucket: "facebook-clone-61815.appspot.com",
  messagingSenderId: "259281911276",
  appId: "1:259281911276:web:a6ca4d3784f628831014c9",
  measurementId: "G-6GQFSNZBKS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
