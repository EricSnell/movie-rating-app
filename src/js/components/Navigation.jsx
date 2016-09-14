import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Navigation extends React.Component {
  render() {
    // TODO: Set up Link route to users profile
    let link = 'Sign Up'
    if (this.props.loggedIn) {
      link = <Link to={'/user'}>My Profile</Link>
    } else {
      this.props.dispatch(actions.toggleLoginOverlay())
    }

    // TODO: Set up Link route to Home component
    return (
      <ul className="nav-bar">
        <li><Link to={'/'}>Logo</Link></li>
        <li>{link}</li>
      </ul>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn,
    mainUserId: state.mainUserId
  }
}

export default connect(mapStateToProps)(Navigation)
