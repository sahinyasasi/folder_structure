import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Container,
  InputAdornment,
} from "@material-ui/core";
import GridItem from "../layouts/GridItem";
import PostHeader from "./PostHeader";
import FormInput from "../layouts/FormInput";
const useStyles = makeStyles((theme) => ({
  root: {},
  cardContent: {
    marginTop: 20,
  },
}));

const mandatoryText = "Asking Price field cannot be empty";
const valObj = {
  value: "",
  error: false,
  errorText: "ex: asking price helper text",
};

const PostAskingPrice = () => {
  const classes = useStyles();
  const [askingPrice, setAskingPrice] = useState(valObj);

  const handleChange = (val) => {
    if (val) {
      setAskingPrice({
        ...valObj,
        value: val,
      });
    } else {
      setAskingPrice({
        ...valObj,
        error: true,
        errorText: mandatoryText,
      });
    }
    //console.log(askingPrice);
  };

  const title = "Enter Asking Price";
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <PostHeader title={title} />
      <Card>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <GridItem
              size={[12, 6, 4]}
              componentToPassDown={
                <FormInput
                  label="Asking Price"
                  required
                  fullWidth
                  onChange={(e) => handleChange(e.target.value)}
                  value={askingPrice.value}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rs</InputAdornment>
                    ),
                  }}
                />
              }
            />
            <GridItem
              size={[12, 6, 8]}
              componentToPassDown={
                <Typography variant="body2" gutterBottom>
                  Determine a competitive price by comparing your vehicle's
                  information and mileage to similar vehicles for sale by
                  dealers and private sellers in your area. Then consider
                  pricing your vehicle within range. Be sure to provide Seller's
                  Comments and photos to highlight the best features of your
                  vehicle, especially if your asking price is above average.
                </Typography>
              }
            />
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
export default PostAskingPrice;
