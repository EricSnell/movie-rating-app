import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
// import * as actions from './actions'
import store from './redux/store'

// import StarRater from './components/StarRater'
// import LoginOverlay from './components/LoginOverlay'
// import TopFiveOverlay from './components/TopFiveOverlay'
import Home from './components/Home'
// import MovieContainer from './components/MovieContainer'
// import UserContainer from './components/UserContainer'
// import Navigation from './components/Navigation'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
      <Home />
		</Provider>, document.getElementById('app')
	)
})
