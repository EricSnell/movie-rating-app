import React from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
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
    // TODO: state
  }
}

export default connect(mapStateToProps)(Navigation)
