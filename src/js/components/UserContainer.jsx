import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class UserContainer extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let reviews;
    // TODO: Loop through users reviews (object.keys, .map) and return <li> of
    // an image of the movie
    // a StarRatingComponent (editing={false}, value= users rating)
    // the users written review
    return (
      <div>
        <h1>someUsername</h1>
        <h1>Top 5</h1>
        <h3>*Images of users top 5 movie titles</h3>
        <h1>Reviews</h1>
        <ul>
          {reviews}
        </ul>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: state
  }
}

export default connect(mapStateToProps)(UserContainer)
