import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { validationService } from "../../services/validationService";
import FormInput from "../layouts/FormInput";
import Page from "../layouts/Page";
import getInitials from "../../utils/getInitials";
import CustomButton from "../layouts/CustomButton";
import { userActions } from "../../actions";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

import Password from "../layouts/PassWord";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
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
    paddingBottom: 80,
    paddingTop: 80,
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
      dispatch(userActions.register({ user: userObj }, "/dashboard"));
    } else {
      console.log(" register failed Validation!!!!!!!!!!!!!");
      setRegisterDetails(validationResult.registerErrorVals);
    }
  };
  const textStyle = (text) => {
    let title = text[0].toUpperCase() + text.slice(1).replace("_", " ");
    return title.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  };

  return (
    <Page className={classes.root} title="Register">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mt={2} display="flex" justifyContent="center">
          <Typography color="textPrimary" gutterBottom variant="h5">
            Create An Account
          </Typography>
        </Box>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box flexGrow={1}>
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
            <Box mt={3}>
              <Typography>
                Already A Member ? <Link href="/login"> Sign In</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};
export default Register;
