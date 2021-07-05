import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const mandatoryText = " field cannot be empty";
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

  const updateValObjWithVal = (data) => {
    if (data && data.value) {
      return {
        ...valObj,
        value: data.value,
      };
    } else {
      return {
        ...valObj,
        value: "",
      };
    }
  };

  const updateValObjWithError = (errorText) => {
    return {
      ...valObj,
      value: "",
      error: true,
      errorText: errorText,
    };
  };
  const handleChange = (key, data) => {
    let newData = "";
    if (data && data.value) {
      newData = updateValObjWithVal(data);
    } else {
      newData = updateValObjWithError(`${key} ${mandatoryText}!`);
    }

    setSellerDetails({
      ...sellerDetails,
      [key]: newData,
    });
  };

  /* const Input = (props) => {
    return (
      <FormInput
        fullWidth
        label={`Seller's ${props.title}`}
        required
        {...props}
      />
    );
  };*/
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
              componentToPassDown={
                <FormInput
                  fullWidth
                  required
                  label="Seller's Name"
                  value={sellerDetails.name.value}
                  onChange={(e) =>
                    handleChange("name", { value: e.target.value })
                  }
                />
              }
            />

            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={
                <FormInput
                  fullWidth
                  required
                  label="Seller's Phone"
                  value={sellerDetails.phone_number.value}
                  onChange={(e) =>
                    handleChange("phone_number", { value: e.target.value })
                  }
                />
              }
            />
            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={
                <FormInput
                  fullWidth
                  required
                  label="Seller's Email"
                  value={sellerDetails.email.value}
                  onChange={(e) => {
                    handleChange("email", { value: e.target.value });
                    console.log(e.target.value);
                  }}
                />
              }
            />
          </Grid>
          <GridItem
            size={[12]}
            componentToPassDown={
              <FormInput
                fullWidth
                required
                label="Seller's Additional Notes about your Vehicle - ex: Excellent condition, No accidents, Must see"
                multiline
                rows={5}
                value={sellerDetails.seller_notes.value}
                onChange={(e) =>
                  handleChange("seller_notes", { value: e.target.value })
                }
              />
            }
          />
        </CardContent>
      </Card>
    </Container>
  );
};
export default PostSellerDetails;
