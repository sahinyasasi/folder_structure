import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import FormInput from "./layouts/FormInput";

import CustomButton from "./layouts/CustomButton";
import { userActions } from "../actions";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Password from "./layouts/PassWord";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "75%",
    marginLeft: "15%",
  },
  cardContainer: {
    // paddingBottom: 40,
    paddingTop: 20,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
  },
}));

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [registerDetails, setRegisterDetails] = useState({
    first_name: "",
    last_name: "",
    login_id: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (key, data) => {
    setRegisterDetails({
      ...registerDetails,
      [key]: data.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("(handleSubmit)========================== ", registerDetails);
    dispatch(userActions.register({ user: registerDetails }, "/dashboard"));
  };
  return (
    <div className={classes.root} title="Register">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mt={4} display="flex" justifyContent="center">
          {/* <RouterLink to="/login"> */}
          <Typography color="textPrimary" gutterBottom variant="h5">
            Register a new user
          </Typography>

          {/* </RouterLink> */}
        </Box>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box flexGrow={1} mt={2}>
              <form onSubmit={handleSubmit} noValidate>
                <FormInput
                  label="First Name"
                  value={registerDetails.first_name}
                  fullWidth
                  autoFocus
                  required
                  onChange={(e) =>
                    handleChange("first_name", { value: e.target.value })
                  }
                />
                <FormInput
                  label="Last Name"
                  value={registerDetails.last_name}
                  fullWidth
                  required
                  onChange={(e) =>
                    handleChange("last_name", { value: e.target.value })
                  }
                />
                <FormInput
                  label="Email"
                  value={registerDetails.email}
                  fullWidth
                  required
                  onChange={(e) =>
                    handleChange("email", { value: e.target.value })
                  }
                />
                <FormInput
                  label="LoginId"
                  value={registerDetails.login_id}
                  fullWidth
                  required
                  onChange={(e) =>
                    handleChange("login_id", { value: e.target.value })
                  }
                />
                <FormInput
                  label="Phone"
                  value={registerDetails.phone}
                  fullWidth
                  required
                  onChange={(e) =>
                    handleChange("phone", { value: e.target.value })
                  }
                />
                <Password
                  value={registerDetails.password}
                  onChange={(e) =>
                    handleChange("password", { value: e.target.value })
                  }
                />
                <Box mt={6}>
                  <CustomButton
                    // color="secondary"
                    //   disabled={isSubmitting}
                    fullWidth
                    size="small"
                    type="submit"
                    title="Register"
                  />
                </Box>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Register;
