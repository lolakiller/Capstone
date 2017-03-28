// want to be able to see each snakes points.

/* ------- ACTIONS -------- */
const UPDATE_SNAKE_POINTS = "UPDATE_SNAKE_POINTS"
const GET_SNAKES = "GET_SNAKES"
const GET_SNAKE = "GET_SNAKE"
const ADD_NAME = "ADD_NAME"


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

export const getSnake = snake => ({
  type: GET_SNAKE,
  snake
})

export const addName = (snake, name) => ({
  type: ADD_NAME,
  name
})

const initialSnakesState = {
  selected: {}, // name and points of each snake
  list: {} // all snakes
}


/* --------------- REDUCER ----------------- */
const snakeReducer = (state = initialSnakesState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type){
    case UPDATE_SNAKE_POINTS:
      newState.list[action.snake.id].points = action.snake.points
      break;

    case GET_SNAKES:
      newState.list = action.snakes
      break;

    case ADD_NAME:
      console.log("~~~~~~~~ INSIDE REDUCER", action)
      newState.list[action.snake.id].name = action.snake.name

    default:
      return state
  }
  return newState
}

export default snakeReducer