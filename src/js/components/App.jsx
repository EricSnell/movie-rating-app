import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import LoginOverlay from './LoginOverlay'
import TopFiveOverlay from './TopFiveOverlay'
import Navigation from './Navigation'

class App extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.fetchMoviePosterBaseURL());
    }
    render() {
        return (
            <div>
                <Navigation/>
                <LoginOverlay/>
                <TopFiveOverlay/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect()(App);
