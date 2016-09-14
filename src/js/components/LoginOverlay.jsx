import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link } from 'react-router'

class LoginOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
    this.skipLogin = this.skipLogin.bind(this)
  }

  // Adds or retrieves user from the database
  getUser() {
    const userName = this.refs.userName.value
    this.props.dispatch(actions.fetchAddUser(userName))
  }

  // Allows user to skip login/registration
  skipLogin() {
    this.props.dispatch(actions.toggleLoginOverlay())
  }

  render() {
    // Only shows overlay when Home component mounts or when 'Sign Up' clicked in Navigation, otherwise hidden
    let classes = 'loginOverlay '
    if (!this.props.loginOverlay) {
      classes += "hidden"
    }

    return (
      <div className={classes}>
        <h1>Welcome to Burnt Marshmallows</h1>
        <input type="text" ref="userName" placeholder="Username" />
        <input type="submit" onClick={this.getUser} />
        <button onClick={this.skipLogin}>Just Browsing</button>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    loginOverlay: state.loginOverlay
  }
}

export default connect(mapStateToProps)(LoginOverlay)
