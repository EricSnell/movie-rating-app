import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import MovieTile from './MovieTile'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    // Loop through movie array retrieved from API and create seperate
    // components for each.
      let movies
      if(this.props.movies) {
        movies = this.props.movies.map((movie) => {
          let imageURL = this.props.baseURL + this.props.posterSize + movie.poster_path;

          // Set a not found image, for the movies that do not have
          // a poster file path
          if(!movie.poster_path) {
            imageURL = 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg';
          }

          return <MovieTile key={movie.id}
            movieId={movie.id}
            title={movie.title}
            moviePoster={imageURL} />
        });
      }

    return (
      <div>
        <h1 className="text-center" style={{"paddingBottom": "2%"}}>Popular Titles</h1>
        <div className="row">
          {movies || null}
        </div>
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
