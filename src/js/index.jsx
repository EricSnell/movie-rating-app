import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
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
import searchResults from './components/searchResults'


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="search" component={searchResults}/>
                <Route path="movie/:id" component={MovieContainer}/>
                <Route path="user/:id" component={UserContainer}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'))
})
