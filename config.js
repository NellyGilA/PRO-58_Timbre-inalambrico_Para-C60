import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBajJWbons82UJvdY64E8lvhtWXiDkn3H0",
  authDomain: "app-timbre-inalambrico-739bc.firebaseapp.com",
  databaseURL: "https://app-timbre-inalambrico-739bc-default-rtdb.firebaseio.com",
  projectId: "app-timbre-inalambrico-739bc",
  storageBucket: "app-timbre-inalambrico-739bc.appspot.com",
  messagingSenderId: "258572904857",
  appId: "1:258572904857:web:78636380b472be0e744b08",
  measurementId: "G-C6SQHCZ109"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
