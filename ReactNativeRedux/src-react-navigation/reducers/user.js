import {USER_SET, USER_REMOVE} from '../actions/user'

const userInitialState = {
  loggedIn: false,
  email: '',
}

export default function userReducer(state = userInitialState, action) {
  const {payload, type} = action

  switch (type) {
    case USER_SET: {
      /**
       * NOTICE: We PiggyBack on Redux events(actions) and use them
       * to navigate, instead of spreading navigation events all
       * over the view
       *
       * We need to use setImmediate due that triggering a navigation
       * directly from here will result in the errors:
       *
       * Error: You may not call store.getState() while the reducer is executing.
       *
       * Error: You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.
       *
       * TODO: RESPOND: https://stackoverflow.com/questions/53749550/error-you-may-not-call-store-getstate-while-the-reducer-is-executing-not-a
       *
       * It looks like redux has some checkups in place to avoid actively
       * getting state from the store or subscribe/unsubscribe from it
       * while the reducers are executing, this is the kind of problems
       * that we get from bracking the pattern with reactnavigation in
       * the first place 	¯\_(ツ)_/¯
       *
       * DOCS: https://redux.js.org/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers
       *
       * QUESTION: Would it be better to consider the NavigationService.navigate
       * as an action and put NavigationService.navigate('App') in the
       * USER_SET action?
       *
       * ANSWER: It looks like it, moving it to the action, this is just for
       */
      // setImmediate(() => NavigationService.navigate('App'))

      return {
        ...state,
        loggedIn: true,
        email: payload.email,
      }
    }

    case USER_REMOVE: {
      return userInitialState
    }

    default:
      return state
  }
}
