import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = firebase.initializeApp({
    apiKey: "AIzaSyB8cK6P_Z0te1Bw5YEHjQ15g7er6MHjSgo",
    authDomain: "meu-projeto-quiz.firebaseapp.com",
    databaseURL: "https://meu-projeto-quiz.firebaseio.com",
    projectId: "meu-projeto-quiz",
    storageBucket: "meu-projeto-quiz.appspot.com",
    messagingSenderId: "172532916668"
  });
  const db = firebase.database(firebaseInfo)

  const config = Rebase.createClass(db)

  //export const facebook = new firebase.auth.FacebookAuthProvider()
   export const providers = {
     'facebook': new firebase.auth.FacebookAuthProvider(),
     'twitter' : new firebase.auth.TwitterAuthProvider(),
      'google' : new firebase.auth.GoogleAuthProvider()
   }

  export const auth = firebaseInfo.auth()

  export default config