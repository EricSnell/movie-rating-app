import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import StarRatingComponent from 'react-star-rating-component'

class UserReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.submitReview = this.submitReview.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.dispatch(actions.starRating(nextValue))
  }

  submitReview() {
    // TODO: add movieId (state) and userId (state) to dispatch parameters
    let userReview = this.refs.userReview.value
    this.props.dispatch(actions.fetchAddReview(this.props.rating, userReview))
  }

  render() {
    let classes = "user-review-container "
    if (!this.props.loggedIn) {
      classes += "hidden"
    }

    const rate = this.props.rating
    return (
      <div className={classes}>
        <h4>Rate It:</h4>
        <StarRatingComponent name="rate2" starCount={5} value={rate} onStarClick={this.onStarClick.bind(this)} />
        <h4>Your review:</h4>
        <textarea type="text" rows="5" cols="50" ref="userReview" />
        <button onClick={this.submitReview}>Submit</button>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    rating: state.starRating,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(UserReviewContainer)
