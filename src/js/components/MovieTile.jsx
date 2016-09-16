import React from 'react';
import { Link } from 'react-router';

class MovieTile extends React.Component {
  render () {
    return (
      // Will route to /Movie/:movieid
      // @NOTE: Styles break when the posters are of different heights
      // Possible solutions here:
      // https://scotch.io/bar-talk/different-tricks-on-how-to-make-bootstrap-columns-all-the-same-height
      <div className="col-sm-2 col-md-3">
        <Link to={'/movie/' + this.props.movieId}>
          <div className="thumbnail">
            <img src={this.props.moviePoster} alt={this.props.title} />
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieTile;
