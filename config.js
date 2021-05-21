import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyBvhOH5QRVQIkvOL7LismbeLpn_7n3RP8Q",
  authDomain: "wily-b994c.firebaseapp.com",
  projectId: "wily-b994c",
  storageBucket: "wily-b994c.appspot.com",
  messagingSenderId: "128097168196",
  appId: "1:128097168196:web:29e38fce676e560ad3c511"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();