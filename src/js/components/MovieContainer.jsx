import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Reviews from './Reviews'
import UserReviewContainer from './UserReviewContainer'

class MovieContainer extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return(
      <div>
        <h1>Movie Name</h1>
        <h2>Image of Movie</h2>
        <h3>Overview</h3>
        <p>Short movie description</p>

        <Reviews />
        <UserReviewContainer />
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: state
  }
}

export default connect(mapStateToProps)(MovieContainer)
