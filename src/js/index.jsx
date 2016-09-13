import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
// import * as actions from './actions'
import store from './redux/store'

import StarRater from './components/StarRater'


document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
      <StarRater />
		</Provider>, document.getElementById('app')
	)
})
