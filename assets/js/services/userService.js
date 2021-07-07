import config from "config";

export const userService = {
  register,
};

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`http://localhost:4000/api/apps/1001/users/`, requestOptions)
    .then((handleResponse) => handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("slc_user", JSON.stringify(user));
      return user;
    });
}
