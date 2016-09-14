import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.findMovie = this.findMovie.bind(this)
  }

  componentDidMount() {
  // Dispatches fetch action to API for list or recent movies
  // TODO: create functionality for fetchRecentMovies in /actions
  //  this.props.dispatch(actions.fetchRecentMovies())
  }

  findMovie() {
    //Dispatch action (fetchMovieInfo) to make API GET request for movie title
    let movieSearch = this.refs.movieSearch.value
    this.props.dispatch(actions.fetchFindMovie(movieSearch))
  }

  render() {
    let movies
    // Loop through movie title/poster state (object.keys, .map) and return <li>
    // of movie poster as a link to MovieContainer

    return (
      <div>
        <input type="text" ref="movieSearch" placeholder="Movie Title" />
        <button onClick={this.findMovie}>Search</button>
        <h1>Recent Titles</h1>
        <ul>
          {movies}
        </ul>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps)(Home)
