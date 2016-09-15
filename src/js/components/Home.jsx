import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import MovieTile from './MovieTile'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.findMovie = this.findMovie.bind(this);
  }

  componentDidMount() {

  }

  findMovie() {
    //Dispatch action (fetchMovieInfo) to make API GET request for movie title
    let movieSearch = this.refs.movieSearch.value
    this.props.dispatch(actions.fetchFindMovie(movieSearch))
  }

  render() {
    // Loop through movie array retrieved from API and create seperate
    // components for each.
      let movies
      if(this.props.movies) {
        let imageURL = this.props.baseURL + '/' + this.props.posterSize + '/';
        movies = this.props.movies.map((movie) => {
          return <MovieTile key={movie.id}
            movieId={movie.id}
            title={movie.title}
            moviePoster={imageURL + movie.poster_path} />
        });
      }

    return (
      <div>
        <input type="text" ref="movieSearch" placeholder="Movie Title" />
        <button onClick={this.findMovie}>Search</button>
        <h1 className="text-center" style={{"paddingBottom": "2%"}}>Popular Titles</h1>
        <ul className="row">
          {movies || null}
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
