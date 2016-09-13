import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class TopFiveOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.submitTopFive = this.submitTopFive.bind(this)
  }

  submitTopFive() {
    // TODO: dispatch action to submit form data and hide topFiverOverlay
  }

  render() {
    // TODO: if topFiveDisplay state is false, add 'hidden' class
    let classes = 'topFiverOverlay '

    return (
      <div className={classes}>
        <h1>Your Top 5 Favorite Movies</h1>
        <form>
          <input type="text" name="movie_1" placeholder="Jurassic Park"></input>
          <input type="text" name="movie_2" placeholder="Night of the Living Dead"></input>
          <input type="text" name="movie_3" placeholder="2001: A Space Odyssey"></input>
          <input type="text" name="movie_4" placeholder="The Big Lebowski"></input>
          <input type="text" name="movie_5" placeholder="Ghostbusters"></input>
          <input type="submit" onClick={this.submitTopFive} value="Enter"></input>
        </form>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: add state
  }
}

export default connect(mapStateToProps)(TopFiveOverlay)
