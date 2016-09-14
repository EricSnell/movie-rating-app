import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import * as actions from './redux/actions'
import store from './redux/store'

import LoginOverlay from './components/LoginOverlay'
import TopFiveOverlay from './components/TopFiveOverlay'
import Home from './components/Home'
import MovieContainer from './components/MovieContainer'
import UserContainer from './components/UserContainer'
import Navigation from './components/Navigation'

var App = (props) => {
	return (
		<div>
			<Navigation />
			<LoginOverlay />
			<TopFiveOverlay />
			<div>
				{props.children}
			</div>
		</div>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home} />
					<Route path="/movie" component={MovieContainer} />
					<Route path="/user" component={UserContainer} />
				</Route>
			</Router>
		</Provider>, document.getElementById('app')
	)
})
