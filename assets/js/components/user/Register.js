import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { validationService } from "../../services/validationService";
import FormInput from "../layouts/FormInput";

import CustomButton from "../layouts/CustomButton";
import { userActions } from "../../actions";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Password from "../layouts/PassWord";
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
const valObj = { value: "", error: false, errorText: "" };
const mandatoryText = "field cannot be empty";
const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [registerDetails, setRegisterDetails] = useState({
    first_name: valObj,
    last_name: valObj,
    login_id: valObj,
    email: valObj,
    password: valObj,
    phone: valObj,
  });

  const handleChange = (key, data) => {
    let userDetails = "";
    if (data && data.value) {
      userDetails = validationService.updateValObjWithVal(data);
    } else {
      userDetails = validationService.updateValObjWithError(
        `${key} ${mandatoryText}!`
      );
    }

    setRegisterDetails({
      ...registerDetails,
      [key]: userDetails,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("(handleSubmit)========================== ", registerDetails);
    let validationResult =
      validationService.validateRegisterUserDetails(registerDetails);
    if (validationResult.isValid) {
      console.log("Success Validation Ready to register");
      let userObj = Object.assign(
        {},
        ...Object.entries(registerDetails).map(([k, v]) => ({ [k]: v.value }))
      );
      console.log("(userObj)==========================userObj ", userObj);
      dispatch(userActions.register({ user: userObj }, "/"));
    } else {
      console.log(" register failed Validation!!!!!!!!!!!!!");
      setRegisterDetails(validationResult.registerErrorVals);
    }
  };
  const textStyle = (name) => {
    return name[0].toUpperCase() + name.slice(1).replace("_", " ").trim();
  };

  return (
    <div className={classes.root} title="Register">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mt={2} display="flex" justifyContent="center">
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
                        value={registerDetails[data].value}
                        error={registerDetails[data].error}
                        helperText={registerDetails[data].errorText}
                        fullWidth
                        required
                        onChange={(e) => {
                          handleChange(data, { value: e.target.value });
                        }}
                      />
                    );
                  }
                )}

                <Password
                  value={registerDetails.password.value}
                  onChange={(e) =>
                    handleChange("password", { value: e.target.value })
                  }
                  error={registerDetails.password.error}
                  helperText={registerDetails.password.errorText}
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
