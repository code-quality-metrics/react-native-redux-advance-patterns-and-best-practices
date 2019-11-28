import {USER_SET, USER_DEL} from '../actions/user'
import NavigationService from '../navigation/service'
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
       */
      NavigationService.navigate('App')
      return {
        ...state,
        loggedIn: true,
        email: payload.email,
      }
    }

    case USER_DEL: {
      return userInitialState
    }

    default:
      return state
  }
}
