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
  const textStyle = (name) => {
    return name[0].toUpperCase() + name.slice(1).replace("_", " ").trim();
  };

  return (
    <div className={classes.root} title="Register">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mt={4} display="flex" justifyContent="center">
          <Typography color="textPrimary" gutterBottom variant="h5">
            Register a new user
          </Typography>
        </Box>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box flexGrow={1} mt={2}>
              <form onSubmit={handleSubmit} noValidate>
                {["first_name", "last_name", "login_id", "email", "phone"].map(
                  (data) => {
                    return (
                      <FormInput
                        id={data}
                        key={data}
                        label={textStyle(data)}
                        value={registerDetails[data]}
                        fullWidth
                        required
                        onChange={(e) => {
                          handleChange(data, { value: e.target.value });
                          // console.log(registerDetails);
                        }}
                      />
                    );
                  }
                )}

                <Password
                  value={registerDetails.password}
                  onChange={(e) =>
                    handleChange("password", { value: e.target.value })
                  }
                />
                <Box mt={6}>
                  <CustomButton
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
