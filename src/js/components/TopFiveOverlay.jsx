import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class TopFiveOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.submitTopFive = this.submitTopFive.bind(this)
  }

  submitTopFive() {
    //Dispatches action to submit form and add list of favorites to user
    // TODO: create functionality for fetchAddFavorites in /actions
    this.props.dispatch(actions.fetchAddFavorites())
  }

  render() {
    // Only shows overlay if user just registered (after LogInOverlay), otherwise hidden
    let classes = "top-five-overlay "
    if (!this.props.topFiveOverlay) {
      classes += "hidden"
    }

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
    topFiveOverlay: state.topFiveOverlay
  }
}

export default connect(mapStateToProps)(TopFiveOverlay)
