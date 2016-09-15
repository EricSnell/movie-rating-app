import * as actions from './actions'
import { combineReducers } from 'redux';

/*
  What the state looks like
  user: {
    userId: "",
    username: "",
    favorites: [],
    reviews: []
  },
  movieList: {
    movies: [], // Use for popular movies and add additional information pulled from server
    baseURL: "",
    posterSize: ""
  },
  UI: {
    loggedIn: true,
    loginOverlay: false,
    topFiveOverlay: false,
    starRating: 3
  }
}
*/

const mockUser = {
  userId: 123,
  username: "Jane Doe",
  favorites: [],
  reviews: []
}

const mockUI = {
  loggedIn: false,
  loginOverlay: false,
  topFiveOverlay: false,
  starRating: 3
}

const userReducer = (state = mockUser, action) => {
  switch (action.type) {
    case actions.FETCH_ADD_USER_SUCCESS:
      return { ...state,
        userId: action.id,
        username: action.username,
      };
    case actions.FETCH_ADD_FAVORITES_SUCCESS:
    // @NOTE: This might have to change if favorites can be edited.
    // This approach will overwrite any perviously stored favorites.
      return { ...state, favorites: action.favorites};
    case actions.FETCH_ADD_REVIEW_SUCCESS:
      return { ...state, reviews: action.reviews};
    default:
      return state;
    }
  };

const moviesReducer = (state = {}, action) => {
  // This part of state is an array of movie objects
  switch (action.type) {
    case actions.FETCH_POPULAR_MOVIES_SUCCESS:
      // Overright previous movies array
      return { ...state, movies: action.popularMovies};
    case actions.FETCH_POSTER_BASEURL_SUCCESS:
      return { ...state, baseURL: action.posterBaseURL, posterSize: action.posterSize};
    default:
      return state;
    }
  };

const uiReducer = (state = mockUI, action) => {
  switch (action.type) {
    // This may need to change to a async request because your updating the user
    case actions.STAR_RATING:
      return { ...state, starRating: action.rating};
    case actions.TOGGLE_LOGIN_OVERLAY:
      return { ...state, loginOverlay: !state.loginOverlay};
    case actions.TOGGLE_TOP5_OVERLAY:
      return { ...state, topFiveOverlay: !state.topFiveOverlay};
    // Actions are sent to all reducers.
    // This we can effect multiple parts of state.
    // See this discussion for details:
    // https://github.com/reactjs/redux/issues/601
    case actions.FETCH_ADD_USER_SUCCESS:
      // @TODO: Only toggle topFiveOverlay when use first logs in
      // @TODO: Convert these to subroutes?
      // original code: mainUserFavorites ? false : true
      return { ...state, loggedIn: true, topFiveOverlay: true};
    case actions.FETCH_ADD_FAVORITES_SUCCESS:
      return { ...state, topFiveOverlay: false};
    case actions.FETCH_USER_SUCCESS:
        return { ...state,
          userId: action.id,
          username: action.username,
          usersTop5: action.favorites,
          usersReviews: action.reviews
        };
    default:
      return state;
    }
  };

const rootReducer = combineReducers({
  user: userReducer,
  movieList: moviesReducer,
  ui: uiReducer,
});

export default rootReducer
