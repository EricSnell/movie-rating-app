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
    // TODO: dispatch action to set state of rating (integer)
  }

  submitReview() {
    // TODO: dispatch action to submit user review (rating and text review)
    let userReview = this.refs.userReview.value
  }

  render() {
    return (
      <div>
        <h4>Rate It:</h4>
        <StarRatingComponent name="rate2" starCount={5} onStarClick={this.onStarClick.bind(this)} />
        <h4>Your review:</h4>
        <textarea type="text" rows="5" cols="50" ref="userReview" />
        <button onClick={this.submitReview}>Submit</button>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: state
  }
}

export default connect(mapStateToProps)(UserReviewContainer)
