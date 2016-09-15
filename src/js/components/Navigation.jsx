import React from 'react'
import * as actions from '../redux/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router'

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
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <Link className="navbar-left" to={'/'}>
                            <img
                              src="http://demo.vuchkov.biz/theme2/img/blank_logo.gif"
                              alt="logo"
                              style={{maxWidth:"25%", maxHeight:"auto"}}
                              />
                        </Link>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" placeholder="Movie Title" className="search-bar form-control"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right" style={{
                            padding: "0 2% 0 2%"
                        }}>
                            <li onClick={this.signUp}>{link}</li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {loggedIn: state.loggedIn, mainUserId: state.mainUserId}
};

export default connect(mapStateToProps)(Navigation)
