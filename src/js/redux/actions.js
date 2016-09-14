import fetch from 'isomorphic-fetch'

/*-------------- FETCH ACTIONS ------------*/

// Add New User
var fetchAddUser = function(usernameInput) {
    return function(dispatch) {
        var url = 'http://localhost:8080/users';
        var request = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            body: JSON.stringify(
                {username: usernameInput}
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var username = data.username;
            var id = data.id;
            return dispatch(
                fetchAddUserSuccess(username, id)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddUserError(usernameInput, error)
            );
        });
    }
};

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





/*--- ACTIONS ---*/

export const CORRECT_DISPLAY = 'CORRECT_DISPLAY'
export var correctDisplay = () => {
  return {
    type: CORRECT_DISPLAY
  }
}

export const CORRECT_DISPLAY = 'CORRECT_DISPLAY'
export var correctDisplay = () => {
  return {
    type: CORRECT_DISPLAY
  }
}

export const CORRECT_DISPLAY = 'CORRECT_DISPLAY'
export var correctDisplay = () => {
  return {
    type: CORRECT_DISPLAY
  }
}

export const CORRECT_DISPLAY = 'CORRECT_DISPLAY'
export var correctDisplay = () => {
  return {
    type: CORRECT_DISPLAY
  }
}
