import * as actions from './actions'

const initialState = {
  loggedIn: true,
  mainUserId: "",
  mainUsername: "",
  mainUserFavorites: [],
  mainUserReviews: [],
  loginOverlay: true,
  topFiveOverlay: false,
  movieId: "",
  movieName: "",
  movieImage: "",
  movieOverview: "",
  movieReviews: [],
  starRating: 3,
  userId: "",
  username: "",
  usersTop5: [],
  usersReviews: []
}

var AppReducer = (state, action) => {
  state = state || initialState

  if (action.type === actions.STAR_RATING) {
    return Object.assign({}, state, {
      starRating: action.rating
    })
  } else if (action.type === actions.TOGGLE_LOGIN_OVERLAY) {
    if (state.loginOverlay) {
      return Object.assign({}, state, {
        loginOverlay: false
      })
    } else {
      return Object.assign({}, state, {
        loginOverlay: true
      })
    }
  } else if (action.type === actions.TOGGLE_TOP5_OVERLAY) {
    if (state.topFiveOverlay) {
      return Object.assign({}, state, {
        topFiveOverlay: false
      })
    } else {
      return Object.assign({}, state, {
        topFiveOverlay: true
      })
    }
  } else if (action.type === actions.FETCH_ADD_USER_SUCCESS) {
    return Object.assign({}, state, {
      mainUserId: action.id,
      mainUsername: action.username,
      loggedIn: true,
      loginOverlay: false,
      topFiveOverlay: true,
    })
  } else if (action.type === actions.FETCH_ADD_FAVORITES_SUCCESS) {
    return Object.assign({}, state, {
      mainUserFavorites: action.favorites
    })
  } else if (action.type === actions.FETCH_ADD_REVIEW_SUCCESS) {
    return Object.assign({}, state, {
      mainUserReviews: action.reviews
    })
  } else if (action.type === actions.FETCH_USER_SUCCESS) {
    return Object.assign({}, state, {
      userId: action.id,
      username: action.username,
      usersTop5: action.favorites,
      usersReviews: action.reviews
    })
  } else if (action.type === actions.FETCH_MOVIE_INFO_SUCCESS) {
    return Object.assign({}, state, {
      movieId: action.id,
      movieName: action.title,
      movieImage: action.image,
      movieOverview: action.overview
    })
  }

  return state
}

export default AppReducer
