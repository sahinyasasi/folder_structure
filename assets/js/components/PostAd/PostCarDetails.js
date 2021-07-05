import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostHeader from "./PostHeader";
import FormAutoComplete from "../layouts/FormAutoComplete";
import GridItem from "../layouts/GridItem";

import {
  Card,
  Divider,
  Grid,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  cardContent: {
    marginTop: 20,
    marginBottom: 20,
  },
  cardGrid: {
    marginTop: 20,
  },
}));
const options = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const Input = (props) => {
  return <FormAutoComplete options={options} label={props.title} {...props} />;
};

const PostCarDetails = () => {
  const classes = useStyles();

  const title = "Enter Car Details";
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <PostHeader title={title} />
      <form autoComplete="off" noValidate className={classes.root}>
        <Card>
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={3}>
              <GridItem
                size={[12, 6, 4]}
                componentToPassDown={<Input title="Brand" />}
              />

              <GridItem
                size={[12, 6, 4]}
                componentToPassDown={<Input title="Model" />}
              />
              <GridItem
                size={[12, 6, 4]}
                componentToPassDown={<Input title="Variant" />}
              />
            </Grid>
          </Box>
          <Divider />
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={5}>
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Year" />}
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Condition" />}
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Fuel Type" />}
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Body Type" />}
              />
            </Grid>
          </Box>
          <Divider />
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={5}>
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Transmission" />}
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="No Of Owners" />}
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={<Input title="Km Driven" />}
              />
            </Grid>
          </Box>
          <Divider />
        </Card>
      </form>
    </Container>
  );
};
export default PostCarDetails;
