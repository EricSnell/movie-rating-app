import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import * as actions from './redux/actions'
import store from './redux/store'

import LoginOverlay from './components/LoginOverlay'
import TopFiveOverlay from './components/TopFiveOverlay'
import App from './components/App'
import Home from './components/Home'
import MovieContainer from './components/MovieContainer'
import UserContainer from './components/UserContainer'
import Navigation from './components/Navigation'


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/movie/:id" component={MovieContainer}/>
                <Route path="/user/:id" component={UserContainer}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'))
})
