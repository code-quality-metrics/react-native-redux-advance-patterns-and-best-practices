export const FIREBASE_INITIALIZED = '[FIREBASE] INITIALIZED'

import firebase from '../lib/firebase'

export const logOut = () => () => {
  return firebase.auth().signOut()
}
