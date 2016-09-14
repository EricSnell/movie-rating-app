import fetch from 'isomorphic-fetch'

/*-------------- FETCH ACTIONS ------------*/

// Add New User
export var fetchAddUser = (usernameInput) => {
  return (dispatch) => {
    const url = 'http://localhost:8080/users'
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(
        {username: usernameInput}
      )}
    return fetch(url, request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return response.json()
    })
    .then((data) => {
      const username = data.username
      const id = data.id;
      return dispatch(
        fetchAddUserSuccess(username, id)
      )
    })
    .catch((error) => {
      return dispatch(
        fetchAddUserError(usernameInput, error)
      )
    })
  }
}

// Add User's Top 5 Favorite Movies
export var fetchAddFavorites = (favorites, userId) => {
  return (dispatch) => {
    const url = 'http://localhost:8080/favorites/' + userId
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(
        {favorites: favorites}
      )}
    return fetch(url, request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return response.json()
    })
    .then((data) => {
      const usersTop5 = data.favorites
      return dispatch(
        fetchAddFavoritesSuccess(usersTop5)
      )
    })
    .catch((error) => {
      return dispatch(
        fetchAddFavoritesError(favorites, error)
      )
    })
  }
}

// Add User's Reviews
export var fetchAddReview = (movieId, rating, review, userId) => {
  return (dispatch) => {
    const url = 'http://localhost:8080/reviews/' + userId
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(
        {movieId: movieId, rating: rating, review: review}
      )}
    return fetch(url, request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return response.json()
    })
    .then((data) => {
      return dispatch(
        fetchAddReviewSuccess()
      )
    })
    .catch((error) => {
      return dispatch(
        fetchAddReviewError(error)
      )
    })
  }
}

// Get User Information
export var fetchUser = (username) => {

}



/*----------- API ACTIONS -----------*/
/*
DOCUMENTATION:
http://docs.themoviedb.apiary.io/#
https://www.themoviedb.org/documentation/api
*/
const key = '415baa6d5ed6520aa2b2f22827e5db1d'

// Get List of Recent Movies (12)
export var fetchRecentMovies = () => {

}

// Get Movie Info (returns Title, ID, Poster Image, Overview)
export var fetchMovieInfo = (movieId) => {

}

// Find Movie
export var fetchFindMovie = (userInput) => {

}



/*------------- ACTIONS -------------*/

export const TOGGLE_LOGIN_OVERLAY = 'TOGGLE_LOGIN_OVERLAY'
export var toggleLoginOverlay = () => {
  return {
    type: TOGGLE_LOGIN_OVERLAY
  }
}

export const TOGGLE_TOP5_OVERLAY = 'TOGGLE_TOP5_OVERLAY'
export var toggleTop5Overlay = () => {
  return {
    type: TOGGLE_TOP5_OVERLAY
  }
}

export const STAR_RATING = 'STAR_RATING'
export var starRating = (rating) => {
  return {
    type: STAR_RATING,
    rating: rating
  }
}



/*--- FETCH SUCCESS / ERROR ACTIONS ---*/

export const FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS';
export var fetchAddUserSuccess = (username, id) => {
  return {
    type: FETCH_ADD_USER_SUCCESS,
    username: username,
    id: id
  }
}

export const FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR';
export var fetchAddUserError = (usernameInput, error) => {
  return {
    type: FETCH_ADD_USER_ERROR,
    username: usernameInput,
    error: error
  }
}
export const FETCH_ADD_FAVORITES_SUCCESS = 'FETCH_ADD_FAVORITES_SUCCESS';
export var fetchAddFavoritesSuccess = (usersFavorites) => {
  return {
    type: FETCH_ADD_USER_SUCCESS,
    usersFavorites: usersFavorites
  }
}

export const FETCH_ADD_FAVORITES_ERROR = 'FETCH_ADD_FAVORITES_ERROR';
export var fetchAddFavoritesError = (favorites, error) => {
  return {
    type: FETCH_ADD_USER_ERROR,
    favorites: favorites,
    error: error
  }
}

export const FETCH_ADD_REVIEW_SUCCESS = 'FETCH_ADD_REVIEW_SUCCESS'
export var fetchAddReviewSuccess = () => {
  return {
    type: FETCH_ADD_REVIEW_SUCCESS
  }
}

export const FETCH_ADD_REVIEW_ERROR = 'FETCH_ADD_REVIEW_ERROR'
export var fetchAddReviewError = (error) => {
  return {
    type: FETCH_ADD_REVIEW_ERROR,
    error: error
  }

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export var fetchUserSuccess = (username, usersFavorites, usersReviews) => {
  return {
    type: FETCH_USER_SUCCESS,
    username: username,
    usersFavorites: usersFavorites,
    usersReviews: usersReviews
  }
}

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export var fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error: error
  }
}
