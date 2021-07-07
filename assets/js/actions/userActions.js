import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";

import { history } from "../utils/history";

export const userActions = {
  register,
};

function register(userData, path) {
  return (dispatch) => {
    dispatch(request(userData));

    userService
      .register(userData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((userData) => {
        dispatch(success());

        console.log("register user success", userData);
        history.push(path);
        console.log("after home page", userData, path);
      })
      .catch((response) => {
        dispatch(failure(response));
        response.json().then((json) => {
          console.log(Object.keys(json.errors));
        });
      });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function loginSuccess(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function addUserRegisterValidations(postAdValidationDetails) {
  return {
    type: postAdConstants.ADD_POSTAD_VALIDATIONS,
    postAdValidationDetails,
  };
}
