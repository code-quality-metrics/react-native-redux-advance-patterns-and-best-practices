export const FIREBASE_INITIALIZED = '[FIREBASE] INITIALIZED'

import firebase from '../lib/firebase'

// Log out the user, the event system handles the auth changes
export const logOut = () => () => {
  return firebase.auth().signOut()
}

export const logIn = (email, password) => () => {
  console.log('[Firebase] action: logIn', email, password)
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log('[ERROR][Firebase] action: logIn, error logging in')
      console.log(errorCode, errorMessage)
      // TODO: What type of errors? Manage them
    })
}
