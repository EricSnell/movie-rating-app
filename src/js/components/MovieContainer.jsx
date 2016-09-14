import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Reviews from './Reviews'
import UserReviewContainer from './UserReviewContainer'

class MovieContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // TODO: Dispatch action to fetch for reviews by movie id/name
  }

  render() {
    return(
      <div>
        <h1>{this.props.movieName}</h1>
        <img src={this.props.movieImage} alt={this.props.movieName + " poster"} />
        <h3>Overview</h3>
        <p>{this.props.movieOverview}</p>

        <Reviews />
        <UserReviewContainer />
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    movieId: state.movieId,
    movieName: state.movieName,
    movieImage: state.movieImage,
    movieOverview: state.movieOverview,
    movieReviews: state.movieReviews,

  }
}

export default connect(mapStateToProps)(MovieContainer)
