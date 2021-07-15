import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";
import { setAlert } from "./alertActions";
import { history } from "../utils/history";

export const userActions = {
  register,
  login,
  logout,
};

function register(userData, path) {
  return (dispatch) => {
    dispatch(request(userData));

    const submit = async () => {
      try {
        var response = "";
        response = await userService.register(userData);

        let user = response.data.data;

        dispatch(success(user));
        dispatch(loginSuccess(user));
        console.log("Register User success", response.data.data.id);
        history.push(path);
      } catch (err) {
        let data = err.response.data;
        if (data.errors) {
          dispatch(setAlert(`Password ${data.errors.password}`, "error"));
        } else if (data.error) {
          dispatch(setAlert(data.error, "error"));
        }

        dispatch(failure(err));
      }
    };

    submit();
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

function login(loginDetails, path) {
  return (dispatch) => {
    dispatch(request({ loginDetails }));

    const submit = async () => {
      try {
        var response = "";
        response = await userService.login(loginDetails);

        let user = response.data.data;
        console.log(user, "user");
        dispatch(success(user));
        dispatch(setAlert(response.data.message, "success"));
        localStorage.setItem("a2z_kars_user", JSON.stringify(user));

        console.log("Login success", response.data.data.id);
        history.push(path);
      } catch (err) {
        dispatch(failure(err));
        let error = err.response.data.error;

        dispatch(setAlert(error, "error"));
      }
    };

    submit();

    function request(user) {
      return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
      return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.LOGIN_FAILURE, error };
    }
  };
}
function logout() {
  return (dispatch) => {
    userService.logout();
    dispatch(setAlert("You have been Logged Out Successfully", "success"));
  };
  return { type: userConstants.LOGOUT };
}
