import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import CustomButton from "../layouts/CustomButton";
import { postAdActions, alertActions } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {},
  cardContent: {
    marginTop: 40,
    backgroundColor: "grey",
  },
  submit: {
    marginTop: 100,

    "& > * + *": {
      marginLeft: theme.spacing(5),
    },
  },
}));

const PostSubmitDetails = () => {
  const classes = useStyles();

  const postAd = useSelector((state) => state.postAd.details);
  const dispatch = useDispatch();
  const postAdSubmit = () => {
    let postAdObj = {};
    // let postAdObj = Object.assign(
    //   {},
    Object.entries(postAd).map(([k, v]) => {
      if (k == "external_id") {
        postAdObj[k] = v;
      } else if (k == "type") {
        postAdObj[k] = v;
      } else if (k == "ad_status") {
        postAdObj[k] = v;
      } else if (k == "selected_pricing_plan_id") {
        postAdObj[k] = v;
      } else {
        postAdObj[k] = v.value;
      }
    });

    // console.log("Success Validation Ready to postpostAdObj ", postAdObj);
    dispatch(postAdActions.submitAdDetails({ ad: postAdObj }, "/"));
  };
  return (
    <Container className={classes.root} maxWidth="lg">
      <Card className={classes.cardContent}>
        <Box display="flex" justifyContent="center" p={2}>
          <Typography className={classes.submit}>
            <CustomButton title="Post Ad" onClick={postAdSubmit} />
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};
export default PostSubmitDetails;
