import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import MovieTile from './MovieTile'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.findMovie = this.findMovie.bind(this);
  }

  componentWillMount() {
  // Dispatches fetch action to API for list or recent movies
  // TODO: create functionality for fetchpopularMovies in /actions
   this.props.dispatch(actions.fetchpopularMovies())
  }

  findMovie() {
    //Dispatch action (fetchMovieInfo) to make API GET request for movie title
    let movieSearch = this.refs.movieSearch.value
    this.props.dispatch(actions.fetchFindMovie(movieSearch))
  }

  render() {
    // Loop through movie title/poster state (object.keys, .map) and return <li>
    // of movie poster as a link to MovieContainer
      let movies
      let imageURL
      if(this.props.movies) {
        imageURL = this.props.baseURL + '/' + this.props.posterSize + '/';
        movies = this.props.movies.map((movie, index) => {
          console.log(movie)
          return <MovieTile key={index} movieId={index} title={movie.title} moviePoster={imageURL + movie.poster_path} />
        });
        console.log('movies', movies);
      }

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
  return {
    movies: state.movieList.movies,
    posterSize: state.movieList.posterSize,
    baseURL: state.movieList.baseURL
  };
};

export default connect(mapStateToProps)(Home)
