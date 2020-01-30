/**
 * External events triggered by libraries that dispatch
 * actions
 */
import store from '../store'
import firebase from '../lib/firebase'
import {userSet, userLogout} from '../actions/user'
import {FIREBASE_INITIALIZED} from '../actions/firebase'

firebase.auth().onAuthStateChanged(user => {
  store.dispatch({
    type: FIREBASE_INITIALIZED,
  })
  if (user) {
    const {email} = user
    store.dispatch(userSet(email))
  } else {
    store.dispatch(userLogout())
  }
})
