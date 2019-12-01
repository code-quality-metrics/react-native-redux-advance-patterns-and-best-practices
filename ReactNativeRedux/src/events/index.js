/**
 * External events triggered by libraries that dispatch
 * actions
 */
import store from '../store'
import firebase from '../lib/firebase'
import {setUser, USER_DEL} from '../actions/user'
import {FIREBASE_INITIALIZED} from '../actions/firebase'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const {email} = user
    store.dispatch({
      type: FIREBASE_INITIALIZED,
    })
    store.dispatch(setUser(email))
  } else {
    store.dispatch({
      type: USER_DEL,
    })
  }
})
