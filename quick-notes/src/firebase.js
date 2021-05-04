 import firebase from 'firebase/app'
 import 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBDkkKFg6lPwmMipLma_pCh-wIiOi6syWg",
    authDomain: "quick-notes-lab.firebaseapp.com",
    projectId: "quick-notes-lab",
    storageBucket: "quick-notes-lab.appspot.com",
    messagingSenderId: "235535880457",
    appId: "1:235535880457:web:15e67f84594c1ca99cc3d8"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db= fb.firestore();
  //export const auth = fb.auth();

/*   rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
} */