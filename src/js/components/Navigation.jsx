import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class Navigation extends React.Component {
  render() {
    // TODO: If user is logged in (loggedIn = true), 'My Profile' links to
    // users profile page. If not (loggedIn = false), displays LogInOverlay (LogInOverlay = true)

    return (
      <ul className="nav-bar">
        <li><a>Logo</a></li>
        <li><a>My Profile</a></li>
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
