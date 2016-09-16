import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Reviews from './Reviews'
import UserReviewContainer from './UserReviewContainer'

// @NOTE: Under the current architecture, this code will not work
// if the requested movie id is not in the array loaded from the
// Movie API. The endpoint being used to retrieve the movies,
// `/movie/popular`, refreshes everyday. If a user bookmarks a
// page, then tries to comeback a few days later the link might not
// work because the requested movie is no longer being returned from
// the Movie API.
class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // TODO: Dispatch action to fetch for reviews by movie id/name
  }

  render() {

    // If movies have not been pulled from the API, return null.
    // There is nothing to render.
    if (!this.props.movies || this.props.movies.length === 0) {
     return null;
   }

   // Since both the Home component and SearchResults components
   // redirect here, we need to search through both.
   let allMovies = this.props.movies.concat(this.props.searchResults || []);

   // Will get the id of the movie from the url
   const id = this.props.params.id;

   // filters through the movies by the selected id
   let movie = allMovies.filter((movie) => {
     return id === movie.id.toString();
   })[0];

   // Start with a default image, if we have a poster_path generate the real url
   let imageURL = 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg';

   if (movie.poster_path) {
       imageURL = this.props.baseURL + '/' + this.props.posterSize + '/' + movie.poster_path;
   }




    return(
      <div>
        <h1 className="text-center">{movie.title}</h1>
        <div className="row">
          <img className="img-responsive col-md-2 col-md-offset-5 thumbnail"
            src={imageURL}
            alt={movie.title + ' Poster'} />
        </div>
        <h3 className="text-center"><strong>Overview</strong></h3>
        <div className="row">
          <p className="text-center col-md-4 col-md-offset-4">{movie.overview}</p>
        </div>
        <Reviews />
        <UserReviewContainer />
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    movies: state.movieList.movies,
    searchResults: state.movieList.searchResults,
    posterSize: state.movieList.posterSize,
    baseURL: state.movieList.baseURL
  };
};

export default connect(mapStateToProps)(MovieContainer);
