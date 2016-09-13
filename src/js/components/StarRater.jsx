import React from 'react'
// import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'

class StarRater extends React.Component {
  onStarClick(nextValue, prevValue, name) {
    // TODO: dispatch action to set state of rating (integer)
  }

  render() {
    return (
      <div>
        <StarRatingComponent name="rate1" starCount={5} onStarClick={this.onStarClick.bind(this)} />
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: state for rating
  }
}

export default connect(mapStateToProps)(StarRater)
