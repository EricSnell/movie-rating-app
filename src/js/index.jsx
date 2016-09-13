import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import * as actions from './actions'
import store from './store'


document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
      <Home />
		</Provider>, document.getElementById('app')
	)
})


/*=========== COMPONENTS ============

- Navigation      -->   Holds link to Home, search field, link to User page
- Home            -->   Displays List of Movies populated by backend as links to MovieContainer

- MovieContainer  -->   Movie title, poster image, overview and Review component
- Review          -->   StarRater static component, reviewer info from database
- UserReviewContainer
- StarRater       -->   Displays clickable stars (install module)
- ReviewText      -->   Contains form for user to enter text and submit to database

- UserContainer   -->   Displays username, users top 5 movies as links to movie pages, and UserReview component
- UserReview      -->   Displays users list of reviews for movies, with static StarRater, image of movie that links to it's movie page, and written review

- LoginOverlay    -->   Displays welcome message, text input for username/password, button to log in/register, and option to just browse

- TopFiveOverlay  -->   5 Text inputs, Submit button


========== STATE =================

loggedIn        = boolean: if false, hide UserReviewContainer. Navigation User page link displays LoginOverlay
movieName       = (String) for Movie Page
movieImage      = (String) for Movie Page
movieOverview   = (String) for Movie Page
userStars       = (Int) for Movie Page
usernameDisplay = (String) for User Page
topFiveDisplay  = (Array of Strings) for User Page
