import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.findMovie = this.findMovie.bind(this)
  }

  findMovie() {
    // TODO: Dispatch action to make API GET request for movie title
    let movieSearch = this.refs.movieSearch.value

  }

  render() {
    // TODO: If user is logged in (loggedIn = true), 'My Profile' links to
    // users profile page. If not (loggedIn = false), displays LogInOverlay (LogInOverlay = true)

    return (
      <ul className="nav-bar">
        <li>
          <a>Logo</a>
        </li>
        <li className="search-bar">
          <input type="text" ref="movieSearch" placeholder="Movie Title" />
          <button onClick={this.findMovie}>Search</button>
        </li>
        <li>
          <a>My Profile</a>
        </li>
      </ul>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Navigation)
