export const FIREBASE_INITIALIZED = 'FIREBASE::INITIALIZED'

import firebase from '../lib/firebase'
import {removeUser} from 'actions/user'

export const logOut = () => (dispatch, getState) => {
  // dispatch(logOutStarted)

  return firebase
    .auth()
    .signOut()
    .then(function() {
      dispatch(removeUser())
    })
  // TODO: We should not catch after dispatch, fix this
  // .catch(function(error) {
  //   // An error happened.
  //   console.error('Error logging out')
  //   console.log('TODO: Add error screen')
  // })
}
