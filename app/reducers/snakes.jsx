// import axios from 'axios'
// want to be able to see each snakes points.

/* ------- ACTIONS -------- */
// const GET_SNAKES = "GET_SNAKES"
const UPDATE_SNAKE_POINTS = "UPDATE_SNAKE_POINTS"
const GET_SNAKES = "GET_SNAKES"


/* -------------  ACTION CREATORS  --------------- */

export const updateSnakePoints = snake => ({
  type: UPDATE_SNAKE_POINTS,
  snake
})

export const getSnakes = snakes => ({
  // console.log("INSIDE ACTION CREATOR: ", snakes)
  type: GET_SNAKES,
  snakes
})

const initialSnakesState = {
  selected: {}, // name and points of each snake
  list: {} // all snakes
}


/* --------------- REDUCER ----------------- */
export default function (state = initialSnakesState, action){
  const newState = Object.assign({}, state);

  switch(action.type){
    case UPDATE_SNAKE_POINTS:
    console.log("~~~ REDUCER: ", action.snake)
    console.log("~~~ REDUCER AGAIN: ", newState.list[action.snake.id])
      newState.list[action.snake.id].points = action.snake.points
      // console.log('THIS IS THE REDUCER TALKING: ', newState.selected.points)
      break;

    case GET_SNAKES:
      newState.list = action.snakes
      break;

    default:
      return state
  }
  return newState
}
