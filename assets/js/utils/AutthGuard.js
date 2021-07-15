import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// import useAuth from '../hooks/useAuth';

const AuthGuard = ({ children }) => {
  //   const { isAuthenticated } = useAuth();
  const user = localStorage.getItem("a2z_kars_user");

  if (user) {
    console.log("(Auth Gaurd)========================== Auth Success", user);
    return <>{children}</>;
  } else {
    console.log("(Auth Gaurd)========================== Auth Failure", user);
    return <Redirect to="/login" />;
  }
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
