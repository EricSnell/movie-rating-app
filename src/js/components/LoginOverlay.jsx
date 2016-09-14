import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link } from 'react-router'

class LoginOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
  }

  getUser() {
    const userName = this.refs.userName.value
    this.props.dispatch(actions.fetchAddUser(userName))
  }

  render() {
    let classes = 'loginOverlay '
    if (!this.props.loginOverlay) {
      classes += "hidden"
    }

    // TODO: add Link to skip login/registration straight to Home page
    return (
      <div className={classes}>
        <h1>Welcome to Burnt Marshmallows</h1>
        <input type="text" ref="userName" placeholder="Username" />
        <input type="submit" onClick={this.getUser} />
        <Link>Just Browsing</Link>
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
