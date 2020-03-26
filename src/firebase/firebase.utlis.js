import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC2aOeSu9YP8Q3l-HoUSJc9XpiilTLLDjE",
    authDomain: "zero-clothing-db.firebaseapp.com",
    databaseURL: "https://zero-clothing-db.firebaseio.com",
    projectId: "zero-clothing-db",
    storageBucket: "zero-clothing-db.appspot.com",
    messagingSenderId: "504940653839",
    appId: "1:504940653839:web:e100e3975e543f76ff227a",
    measurementId: "G-NP5J95TKX9"
  }

  firebase.initializeApp(config)
  export const auth = firebase.auth()
  export const firestore= firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase