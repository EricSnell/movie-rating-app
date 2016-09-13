import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies() {
  // TODO: dispatch fetch action for list of most recent movies and set as state

  }

  render() {
    let movies;
    // Loop through movie title/poster state (object.keys, .map) and return <li>
    // of movie poster as a link to Movie Page

    return (
      <div>
        <h1>Recent Titles</h1>
        <ul>
          {movies}
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

export default connect(mapStateToProps)(Home)
