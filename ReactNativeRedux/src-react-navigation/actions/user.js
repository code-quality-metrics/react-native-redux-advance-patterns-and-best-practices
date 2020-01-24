import NavigationService from 'navigation/service'

export const USER_SET = '[USER] SET'

export function setUser(email) {
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

export const USER_REMOVE = '[USER] REMOVE'

export const removeUser = () => ({type: USER_REMOVE})
