import { userConstants } from "../constants/userConstants";

let user = JSON.parse(localStorage.getItem("slc_user"));
const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null };

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        user: null,
      };
    case userConstants.LOGOUT:
      return {
        loggingIn: false,
        user: null,
      };
    case userConstants.REGISTER_VALIDATION_ERRORS:
      return {
        loggingIn: false,
        user: action.userRegisterValidationDetails,
      };
    case userConstants.LOGIN_VALIDATION_ERRORS:
      return {
        loggingIn: false,
        user: action.userLoginValidationDetails,
      };

    default:
      return state;
  }
}
