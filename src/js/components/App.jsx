import React, { PropTypes as T } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import LoginOverlay from './LoginOverlay'
import TopFiveOverlay from './TopFiveOverlay'
import Navigation from './Navigation'

class App extends React.Component {

    componentWillMount() {
      // Dispatches fetch action to API for list of popular movies
      // The recent movie endpoint only returns one movie.
        this.props.dispatch(actions.fetchPosterBaseURL());
        this.props.dispatch(actions.fetchpopularMovies());
    }

    render() {
      console.log('App props: ', this.props.routes[0])
        return (
            <div>
                <Navigation auth={this.props.routes[0].auth}/>
                <LoginOverlay/>
                <TopFiveOverlay/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect()(App);
