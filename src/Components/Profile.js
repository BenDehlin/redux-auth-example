import React from "react"
import { connect } from "react-redux"

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <div>User: {props.user.username}</div>
      <pre>{JSON.stringify(props.movies, null, 2)} </pre>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.authReducer, movies: state.movieReducer.movies }
}
export default connect(mapStateToProps)(Profile)
