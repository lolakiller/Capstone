/* ------- ACTIONS -------- */
const ADD_USERS = 'ADD_USERS'

/* -------------  ACTION CREATORS  --------------- */

export const addUsers = users => ({
  type: ADD_USERS,
  users
})

const initialUsersState = {
   users: []
}

/* --------------- REDUCER ----------------- */
const intReducer = (state = initialUsersState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case ADD_USERS:
      newState.users = action.users
      break

    default:
      return state
  }
  return newState
}
export default intReducer

