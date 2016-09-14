import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
  }

  signUp() {
    if (!this.props.loggedIn) {
      this.props.dispatch(actions.toggleLoginOverlay())
    }
  }

  render() {
    // TODO: Set up Link route to :userId of logged in user (mainUserId)
    let link = 'Sign Up'
    if (this.props.loggedIn) {
      link = <Link to={'/user'}>My Profile</Link>
    }

    return (
      <ul className="nav-bar">
        <li><Link to={'/'}>Logo</Link></li>
        <li onClick={this.signUp}>{link}</li>
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
