import React from "react"
import { Switch, Route } from "react-router-dom"
import Movies from "./Components/Movies"
import Login from "./Components/Login"
import Profile from './Components/Profile'

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/movies" component={Movies} />
    <Route path = '/profile' component={Profile} />
  </Switch>
)
