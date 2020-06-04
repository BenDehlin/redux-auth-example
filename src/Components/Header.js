import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../redux/authReducer"

const Header = (props) => {
  return (
    <header>
      <button onClick={() => props.history.push("/profile")}>Profile</button>
      <button onClick={() => props.history.push("/movies")}>Movies</button>
      <button
        onClick={() => {
          props.logout()
          props.history.push("/")
        }}
      >
        Logout
      </button>
    </header>
  )
}

export default connect(null, { logout })(withRouter(Header))
