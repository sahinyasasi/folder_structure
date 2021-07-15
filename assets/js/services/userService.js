import config from "config";
import axios from "axios";

export const userService = {
  register,
  login,
  logout,
};

function register(user) {
  return axios.post(`http://localhost:4000/api/apps/1001/users/`, user, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}

function login(loginDetails) {
  return axios.post(
    `http://localhost:4000/api/apps/1001/users/sign_in`,
    loginDetails,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
function logout() {
  // remove user from local storage to log user out
  console.log("(fileName)========================== user service logout");
  localStorage.removeItem("a2z_kars_user");
  console.log(
    "(user after logout )========================== user",
    localStorage.getItem("a2z_kars_user")
  );
}
