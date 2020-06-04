const initialState = {
  movies: [],
}

const SET_MOVIES = "SET_MOVIES"

export function setMovies(payload) {
  return { type: SET_MOVIES, payload }
}

export default function movieReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload }
    default:
      return state
  }
}
