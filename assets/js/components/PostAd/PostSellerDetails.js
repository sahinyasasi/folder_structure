import React, { useState } from "react";

import {
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Container,
} from "@material-ui/core";
import _ from "lodash";
import FormInput from "../layouts/FormInput";
import PostHeader from "./PostHeader";

import GridItem from "../layouts/GridItem";
const useStyles = makeStyles((theme) => ({
  root: {},
  cardContent: {
    marginTop: 20,
  },
  cardGrid: {
    marginTop: 20,
  },
  submit: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const valObj = {
  value: "",
  error: false,
  errorText: "",
};

const PostSellerDetails = () => {
  const classes = useStyles();

  const [sellerDetails, setSellerDetails] = useState({
    name: valObj,
    email: valObj,
    phone_number: valObj,
    seller_notes: valObj,
  });

  const Input = (props) => {
    return (
      <FormInput
        fullWidth
        label={`Seller's ${props.title}`}
        required
        {...props}
      />
    );
  };
  const title = "Enter Seller Details and Notes";
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <PostHeader title={title} />
      <Card>
        <Divider />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={<Input title="Name" />}
            />

            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={<Input title="Phone" />}
            />
            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={<Input title="Email" />}
            />
          </Grid>
          <GridItem
            size={[12]}
            componentToPassDown={
              <Input
                multiline
                rows={5}
                title="Additional Notes about your Vehicle - ex: Excellent condition, No accidents, Must see"
              />
            }
          />
        </CardContent>
      </Card>
    </Container>
  );
};
export default PostSellerDetails;
