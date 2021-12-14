import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbKB-l9o0IEqdC9KtGpoR85zB6IWKjbP8",
  authDomain: "contact-management-syste-82cd1.firebaseapp.com",
  databaseURL: "https://contact-management-syste-82cd1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-management-syste-82cd1",
  storageBucket: "contact-management-syste-82cd1.appspot.com",
  messagingSenderId: "654265833009",
  appId: "1:654265833009:web:846f719e73757afa1a6710",
  measurementId: "G-TFW33D1P93"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();