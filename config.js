import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBTW8lhZ8q1rfIXrXZKTBe6sPP8veXhcI8",
  authDomain: "plantathon-7afb0.firebaseapp.com",
  databaseURL: "https://plantathon-7afb0.firebaseio.com",
  projectId: "plantathon-7afb0",
  storageBucket: "plantathon-7afb0.appspot.com",
  messagingSenderId: "821593642069",
  appId: "1:821593642069:web:d80eeb8d59e543b778f0dc"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
