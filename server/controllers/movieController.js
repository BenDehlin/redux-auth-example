module.exports = {
  getMovies: (req, res) => {
    const db = req.app.get("db")
    db.movies
      .get_movies()
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(500).send(err))
  },
}
