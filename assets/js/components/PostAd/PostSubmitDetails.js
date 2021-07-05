import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import CustomButton from "../layouts/CustomButton";
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
  return (
    <Container className={classes.root} maxWidth="lg">
      <Card className={classes.cardContent}>
        <Box display="flex" justifyContent="center" p={2}>
          <Typography className={classes.submit}>
            <CustomButton title="Post Ad" />
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};
export default PostSubmitDetails;
