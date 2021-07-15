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
import { validationService } from "../../services/validationService";
import FormInput from "../layouts/FormInput";
import PostHeader from "./PostHeader";
import { postAdActions } from "../../actions";
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
  const dispatch = useDispatch();
  const postAdSD = useSelector((state) => state.postAd.details);

  const [sellerDetails, setSellerDetails] = useState({
    seller_name: valObj,
    seller_email: valObj,
    seller_phone: valObj,
    seller_notes: valObj,
  });

  const handleChange = (key, data) => {
    let newData = "";
    if (data && data.value) {
      newData = validationService.updateValObjWithVal(data);
    } else {
      newData = validationService.updateValObjWithError(
        `${key} ${mandatoryText}!`
      );
    }

    setSellerDetails({
      ...sellerDetails,
      [key]: newData,
    });
  };
  const handleDispatch = (key, data) => {
    let newData = "";
    if (data && data.value) {
      newData = validationService.updateValObjWithVal(data);
    } else {
      newData = validationService.updateValObjWithError(
        `${key} ${mandatoryText}!`
      );
    }

    switch (key) {
      case "seller_name":
        return dispatch(postAdActions.addSellerName(newData));
      case "seller_phone":
        return dispatch(postAdActions.addSellerPhNum(newData));
      case "seller_email":
        return dispatch(postAdActions.addSellerEmail(newData));
      case "seller_notes":
        return dispatch(postAdActions.addSellerNotes(newData));
    }
  };
  const textStyle = (text) => {
    let title = text[0].toUpperCase() + text.slice(1).replace("_", " ");
    return title.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  };

  const title = "Enter Seller Details and Notes";
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <PostHeader title={title} />
      <Card>
        <Divider />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            {["seller_name", "seller_phone", "seller_email"].map((data) => {
              return (
                <GridItem
                  key={data}
                  size={[12, 6, 4]}
                  componentToPassDown={
                    <FormInput
                      fullWidth
                      required
                      id={`seller${data}`}
                      label={textStyle(data)}
                      value={sellerDetails[data].value}
                      onChange={(e) =>
                        handleChange(data, { value: e.target.value })
                      }
                      onBlur={(e) =>
                        handleDispatch(data, { value: e.target.value })
                      }
                      error={
                        postAdSD && postAdSD[data] && postAdSD[data].error
                          ? postAdSD[data].error
                          : sellerDetails[data].error
                      }
                      helperText={
                        postAdSD && postAdSD[data] && postAdSD[data].error
                          ? postAdSD[data].errorText
                          : sellerDetails[data].errorText
                      }
                    />
                  }
                />
              );
            })}
          </Grid>
          <GridItem
            size={[12]}
            componentToPassDown={
              <FormInput
                fullWidth
                required
                id="sellernotes"
                label="Seller's Additional Notes about your Vehicle - ex: Excellent condition, No accidents, Must see"
                multiline
                rows={5}
                value={sellerDetails.seller_notes.value}
                onChange={(e) =>
                  handleChange("seller_notes", { value: e.target.value })
                }
                onBlur={(e) =>
                  handleDispatch("seller_notes", { value: e.target.value })
                }
                error={
                  postAdSD &&
                  postAdSD.seller_notes &&
                  postAdSD.seller_notes.error
                    ? postAdSD.seller_notes.error
                    : sellerDetails.seller_notes.error
                }
                helperText={
                  postAdSD &&
                  postAdSD.seller_notes &&
                  postAdSD.seller_notes.error
                    ? postAdSD.seller_notes.errorText
                    : sellerDetails.seller_notes.errorText
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
