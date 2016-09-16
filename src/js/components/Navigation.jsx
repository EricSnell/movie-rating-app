import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link, browserHistory } from 'react-router'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this);
        this.onAddInput = this.onAddInput.bind(this);
        this.findMovie = this.findMovie.bind(this);
    }

    signUp() {
        if (!this.props.loggedIn) {
            this.props.dispatch(actions.toggleLoginOverlay())
        }
    }

    findMovie(event) {
      event.preventDefault();
      //Dispatch action (fetchMovieInfo) to make API GET request for movie title
      let movieSearch = this.props.searchText;
      this.props.dispatch(actions.fetchFindMovie(movieSearch));
      // Programically navigates using react-router
      // https://stackoverflow.com/questions/35706835/react-router-redirect-after-action-redux
      browserHistory.push('/search')
    }

    onAddInput (event) {
      let text = event.target.value;
      this.props.dispatch(actions.searchTextChange(text));
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
                        <form className="navbar-form navbar-right"
                          onSubmit={this.findMovie}>
                            <div className="form-group">
                                <input onChange={this.onAddInput}
                                  type="text"
                                  value={this.props.searchText}
                                  placeholder="Movie Title"
                                  className="form-control"/>
                            </div>
                            <button type="submit"
                              className="btn btn-default">Search</button>
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
    return {
      loggedIn: state.ui.loggedIn,
      searchText: state.ui.searchText
    }
};

export default connect(mapStateToProps)(Navigation)
