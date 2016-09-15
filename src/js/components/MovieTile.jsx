import React from 'react';
import { Link } from 'react-router';

class MovieTile extends React.Component {
  render () {
    return (
      // Will route to /Movie/:movieid
      <div class="col-xs-6 col-md-3">
        <Link to={'/movie/' + this.props.movieId}>
          <div class="thumbnail">
            <img src={this.props.moviePoster} alt={this.props.title} />
          </div>
        </Link>
      </div>
    );
  }
}

exports default Tile;
