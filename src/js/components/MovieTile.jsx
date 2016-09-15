import React from 'react';
import { Link } from 'react-router';

class MovieTile extends React.Component {
  render () {
    return (
      // Will route to /Movie/:movieid
      <div className="col-xs-6 col-md-3" style={{"listStyle": "none"}}>
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
