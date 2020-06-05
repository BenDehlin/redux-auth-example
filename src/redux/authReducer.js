import axios from "axios"
const initialState = {
  user_id: null,
  username: "",
}

const SET_USER = "SET_USER"
const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
const LOGOUT = "LOGOUT"
const GET_USER = "GET_USER"
const FULFILLED = "_FULFILLED"

// export function setUser(payload) {
//   return { type: SET_USER, payload }
// }

export function login(user) {
  const payload = axios
    .post("/auth/login", user)
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return { type: LOGIN, payload }
}

export function register(user) {
  const payload = axios
    .post("/auth/register", user)
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return { type: REGISTER, payload: payload }
}

export function logout() {
  axios.post("/auth/logout").catch((err) => console.log(err))
  return { type: LOGOUT }
}

// export function getUser() {
//   const payload = axios
//     .get("/auth/user")
//     .then((results) => results)
//     .catch((err) => console.log(err))
//   return { type: GET_USER, payload }
// }

export default function authReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN + FULFILLED:
      return { ...payload }
    case REGISTER + FULFILLED:
      return { ...payload }
    case LOGOUT + FULFILLED:
      return {...initialState}
    // case SET_USER:
    //   return { ...payload }
    // case GET_USER + FULFILLED:
    //   return { ...payload }
    default:
      return state
  }
}
