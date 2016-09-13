import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
// import * as actions from './actions'
import store from './redux/store'

// import StarRater from './components/StarRater'
// import LoginOverlay from './components/LoginOverlay'
// import TopFiveOverlay from './components/TopFiveOverlay'
// import Home from './components/Home'
import MovieContainer from './components/MovieContainer'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
      <MovieContainer />
		</Provider>, document.getElementById('app')
	)
})
