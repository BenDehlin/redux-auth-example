import React, { Component } from "react"
// import axios from "axios"
import { connect } from "react-redux"
import { login, register } from "../redux/authReducer"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }

  handleChange = ({ name, value }) => this.setState({ [name]: value })
  login = () => {
    const { username, password } = this.state
    this.props.login({ username, password })
    this.props.history.push("/movies")
    // const { username, password } = this.state
    // axios
    //   .post("/auth/login", { username, password })
    //   .then((results) => this.props.setUser(results.data))
    //   .catch((err) => console.log(err))
  }
  register = () => {
    const { username, password } = this.state
    this.props.register({ username, password })
    this.props.history.push("/movies")
    // const { username, password } = this.state
    // axios
    //   .post("/auth/register", { username, password })
    //   .then((results) => this.props.setUser(results.data))
    //   .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => this.handleChange(e.target)}
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  // setUser: setUser,
  login: login,
  register: register,
}

export default connect(null, mapDispatchToProps)(Login)
