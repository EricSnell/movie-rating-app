import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class LoginOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
  }

  getUser() {
    // TODO: dispatch action to retrieve/add user
    const userName = this.refs.userName.value

  }

  render() {
    // TODO: if loginDisplay state is false, add 'hidden' class
    let classes = 'loginOverlay '

    return (
      <div className={classes}>
        <h1>Welcome to Burnt Marshmellows!</h1>
        <input type="text" ref="userName" placeholder="Username" />
        <input type="submit" onClick={this.getUser} />
        // TODO: add Link to skip login/registration straight to Home page
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: state for loginOverlay
  }
}

export default connect(mapStateToProps)(LoginOverlay)
