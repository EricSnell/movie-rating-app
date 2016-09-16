import fetch from 'isomorphic-fetch'
import { Link, browserHistory } from 'react-router'
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

// Get Reviews for Movie
export var fetchMovieReviews = (movieId) => {

}


/*----------- API ACTIONS -----------*/
/*
DOCUMENTATION:
http://docs.themoviedb.apiary.io/#
https://www.themoviedb.org/documentation/api
*/
const key = '415baa6d5ed6520aa2b2f22827e5db1d'

// Get List of Recent Movies (12)
export var fetchpopularMovies = () => {
return (dispatch) => {
    let url = 'http://api.themoviedb.org/3/movie/popular?api_key=415baa6d5ed6520aa2b2f22827e5db1d';
    return fetch(url).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((response) => {
      return dispatch (
        fetchpopularMoviesSuccess(response.results)
      );
    }).catch((error) => {
      return dispatch (
        fetchpopularMoviesError(error)
      );
    });
  };
}

export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS'
const fetchpopularMoviesSuccess = (movies) => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    popularMovies: movies
  };
}

export const FETCH_POPULAR_MOVIES_ERROR = 'FETCH_POPULAR_MOVIES_ERROR'
const fetchpopularMoviesError = (error) => {
  return {
    type: FETCH_POPULAR_MOVIES_ERROR,
    error
  };
}


// Get Movie Info (returns Title, ID, Poster Image, Overview)
export const fetchMovieInfo = (movieId) => {

}

// Find Movie
export const fetchFindMovie = (userInput) => {
  return (dispatch) => {
      let url = `http://api.themoviedb.org/3/search/movie?api_key=415baa6d5ed6520aa2b2f22827e5db1d&query=${userInput}`;
      return fetch(url).then((res) => {
        if (res.status < 200 || res.status >= 300) {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
        return res.json();
      }).then((response) => {
        // browserHistory.push('/search')
        return dispatch (
          fetchFindMovieSuccess(response.results)
        );
      }).catch((error) => {
        return dispatch(
          fetchFindMovieError(error)
        );
      });
    };
}

export const FETCH_FIND_MOVIE_SUCCESS = 'FETCH_FIND_MOVIE_SUCCESS'
const fetchFindMovieSuccess = (movies) => {
  return {
    type: FETCH_FIND_MOVIE_SUCCESS,
    searchResults: movies
  };
}

export const FETCH_FIND_MOVIE_ERROR= 'FETCH_FIND_MOVIE_ERROR'
const fetchFindMovieError = (error) => {
  return {
    type: FETCH_FIND_MOVIE_ERROR,
    error
  };
}

export const fetchPosterBaseURL = () => {
  return (dispatch) => {
      let url = 'http://api.themoviedb.org/3/configuration?api_key=415baa6d5ed6520aa2b2f22827e5db1d';
      return fetch(url).then((res) => {
        if (res.status < 200 || res.status >= 300) {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
        return res.json();
      }).then((config) => {
        return dispatch (
          fetchPosterBaseURLSuccess(config.images.base_url, config.images.poster_sizes[4])
        );
      }).catch((error) => {
        return dispatch(
          fetchPosterBaseURLError(error)
        );
      });
    };
}

export const FETCH_POSTER_BASEURL_SUCCESS = 'POSTER_BASEURL_SUCCESS'
const fetchPosterBaseURLSuccess = (url, posterSize) => {
  return {
    type: FETCH_POSTER_BASEURL_SUCCESS,
    posterBaseURL: url,
    posterSize
  };
};

export const FETCH_POSTER_BASEURL_ERROR = 'POSTER_BASEURL_ERROR'
const fetchPosterBaseURLError = (error) => {
  return {
    type: FETCH_POSTER_BASEURL_ERROR,
    error
  };
};


/*------------- ACTIONS -------------*/

// Toggles the display of the Login Overlay
export const TOGGLE_LOGIN_OVERLAY = 'TOGGLE_LOGIN_OVERLAY'
export var toggleLoginOverlay = () => {
  return {
    type: TOGGLE_LOGIN_OVERLAY
  }
}

// Toggles the display of the Top Five Overlay
export const TOGGLE_TOP5_OVERLAY = 'TOGGLE_TOP5_OVERLAY'
export var toggleTop5Overlay = () => {
  return {
    type: TOGGLE_TOP5_OVERLAY
  }
}

// Sets star rating that user gives to a movie
export const STAR_RATING = 'STAR_RATING'
export var starRating = (rating) => {
  return {
    type: STAR_RATING,
    rating: rating
  }
}

export const SEARCH_TEXT_CHANGE = 'SEARCH_TEXT_CHANGE'
export const searchTextChange = (text) => {
  return {
    type: SEARCH_TEXT_CHANGE,
    text: text
  };
};

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
export var fetchAddReviewSuccess = (userReviews) => {
  return {
    type: FETCH_ADD_REVIEW_SUCCESS,
    reviews: userReviews
  }
}

export const FETCH_ADD_REVIEW_ERROR = 'FETCH_ADD_REVIEW_ERROR'
export var fetchAddReviewError = (error) => {
  return {
    type: FETCH_ADD_REVIEW_ERROR,
    error: error
  }
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export var fetchUserSuccess = (userId, username, usersFavorites, usersReviews) => {
  return {
    type: FETCH_USER_SUCCESS,
    id: userId,
    username: username,
    favorites: usersFavorites,
    reviews: usersReviews
  }
}

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export var fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error: error
  }
}

export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS'
export var fetchReviewsSuccess = (movieId, reviews) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    movieId: movieId,
    reviews: reviews
  }
}

export const FETCH_REVIEWS_ERROR = 'FETCH_REVIEWS_ERROR'
export var fetchReviewsError = (movieId, error) => {
  return {
    type: FETCH_REVIEWS_ERROR,
    movieId: movieId,
    error: error
  }
}

export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS'
export var fetchMovieInfoSuccess = (movieId, movieName, movieImage, movieOverview) => {
  return {
    type: FETCH_MOVIE_INFO_SUCCESS,
    id: movieId,
    title: movieName,
    image: movieImage,
    overview: movieOverview
  }
}

export const FETCH_MOVIE_INFO_ERROR = 'FETCH_MOVIE_INFO_ERROR'
export var fetchMovieInfoError = (userInput, error) => {
  return {
    type: FETCH_MOVIE_INFO_ERROR,
    userInput: userInput,
    error: error
  }
}
