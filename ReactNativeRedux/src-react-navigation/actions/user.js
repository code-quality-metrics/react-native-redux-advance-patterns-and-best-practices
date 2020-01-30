import NavigationService from 'navigation/service'

export const USER_SET = '[USER] SET'

/**
 * Set the user in the state and navigate to the App Navigator because the
 * user is logged in, note that this action creator uses thunk middleware
 * to be able to navigate after the dispatch
 */
export function userSet(email) {
  return dispatch => {
    dispatch({
      type: USER_SET,
      payload: {
        email,
      },
    })
    /**
     * NOTICE:
     * Is not responsability of the view, events or anything else to know
     * that after an action they should trigger a navigation change
     * so the least atrocious place to put a navigation change seems to be
     * inside action creators, we use thunks to be able to dispatch several
     * actions.
     */
    NavigationService.navigate('App')
  }
}

export const USER_REMOVE = '[USER] LOGOUT'

export function userLogout() {
  return dispatch => {
    dispatch({
      type: USER_REMOVE,
    })
    NavigationService.navigate('Auth')
  }
}
