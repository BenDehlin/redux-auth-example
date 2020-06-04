import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { setMovies } from "../redux/movieReducer"

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    axios
      .get("/api/movies")
      .then((results) => {
        this.props.setMovies(results.data)
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        {this.props.movies &&
          this.props.movies.length > 0 &&
          this.props.movies.map((e) => {
            return (
              <div key={e.movie_id}>
                <div>Title: {e.movie_name}</div>
                <div>Rating: {e.movie_rating}</div>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movieReducer.movies }
}

export default connect(mapStateToProps, { setMovies })(Movies)
