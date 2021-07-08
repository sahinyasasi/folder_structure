import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostHeader from "./PostHeader";
import { TextField, InputAdornment } from "@material-ui/core";
import FormAutoComplete from "../layouts/FormAutoComplete";
import GridItem from "../layouts/GridItem";
import { postAdActions } from "../../actions";
import { validationService } from "../../services/validationService";

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

const mandatoryText = "field cannot be empty";
const valObj = { value: "", error: false, errorText: "" };
const PostCarDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [formIsValid, setFormIsValid] = useState(true)
  const [carDetails, setCarDetails] = useState({
    type: "car",
    brand: valObj,
    model: valObj,
    variant: valObj,
    year: valObj,
    condition: valObj,
    fuelType: valObj,
    kmDriven: valObj,
    bodyType: valObj,
    transmission: valObj,
    noOfOwners: valObj,
  });

  const postAd = useSelector((state) => state.postAd.details);

  const arrayToObject = (array) =>
    array.reduce((o, item) => {
      let newObj = new Object();
      newObj["title"] = item + "";
      newObj["value"] = item + "";
      return o.concat(newObj);
    }, []);
  const getOptions = () => {
    let optsArr = ["brand1", "brand2", "brand3"];
    return arrayToObject(optsArr);
  };
  const getYears = () => {
    let presentYear = new Date().getFullYear();
    let years = Array(36)
      .fill()
      .map((element, index) => index + (presentYear - 35));
    return arrayToObject(years.reverse());
  };
  const getConditions = () => {
    let condsArr = ["good", "very good", "excellent"];
    return arrayToObject(condsArr);
  };

  const getFuelTypes = () => {
    let fuelTypeArr = ["petrol", "diesel", "electric"];
    return arrayToObject(fuelTypeArr);
  };

  const getBodyTypes = () => {
    let bodyTypeArr = [
      "hatchback",
      "sedan",
      "suv",
      "crossover",
      "mini van",
      "mpv",
      "coupe",
      "convertible",
      "microcar",
      "truck",
    ];
    return arrayToObject(bodyTypeArr);
  };

  const getTransmissionTypes = () => {
    let transmissionTypeArr = ["manual", "automatic"];
    return arrayToObject(transmissionTypeArr);
  };

  const getNoOfOwners = () => {
    let noOfOwnersArr = ["1", "2", "3", "4", "5+"];
    return arrayToObject(noOfOwnersArr);
  };
  const [carAttr, setCarAttr] = useState({
    brands: getOptions(),
    models: getOptions(),
    variants: getOptions(),
    years: getYears(),
    conditions: getConditions(),
    fuelTypes: getFuelTypes(),
    bodyTypes: getBodyTypes(),
    transmissions: getTransmissionTypes(),
    noOfOwners: getNoOfOwners(),
  });

  useEffect(() => {
    let postId =
      Math.floor(Math.random() * 90000) +
      10000 +
      Math.random().toString(36).substr(3, 3);
    dispatch(postAdActions.addPostId(postId));
    dispatch(postAdActions.addVehicleType(carDetails.type));
  }, []);
  const handleChange = (key, data) => {
    let vehicleDetails = "";
    if (data) {
      vehicleDetails = validationService.updateValObjWithVal(data);
    } else {
      vehicleDetails = validationService.updateValObjWithError(
        `${key} ${mandatoryText}!`
      );
    }

    setCarDetails({
      ...carDetails,
      [key]: vehicleDetails,
    });

    switch (key) {
      case "brand":
        return dispatch(postAdActions.addVehicleBrand(vehicleDetails));
      case "model":
        return dispatch(postAdActions.addVehicleModel(vehicleDetails));
      case "variant":
        return dispatch(postAdActions.addVehicleVariant(vehicleDetails));
      case "year":
        return dispatch(postAdActions.addVehicleYear(vehicleDetails));
      case "condition":
        return dispatch(postAdActions.addVehicleCondition(vehicleDetails));
      case "fuelType":
        return dispatch(postAdActions.addVehicleFuelType(vehicleDetails));
      case "kmDriven":
        return dispatch(postAdActions.addVehicleKmDriven(vehicleDetails));
      case "bodyType":
        return dispatch(postAdActions.addVehicleBodyType(vehicleDetails));
      case "transmission":
        return dispatch(postAdActions.addVehicleTransmission(vehicleDetails));
      case "noOfOwners":
        return dispatch(postAdActions.addVehicleNoOfOwners(vehicleDetails));
    }
  };

  const handleBrandChange = (data) => {
    if (data && data.value) {
      getCarModels(carDetails.type, data.value);
    } else {
      setCarAttr({
        ...carAttr,
        models: "",
        variants: "",
      });
    }
    handleChange("brand", data);
  };

  const handleModelChange = (data) => {
    if (data && data.value) {
      getCarVariants(carDetails.type, carDetails.brand.value, data.value);
    } else {
      setCarAttr({
        ...carAttr,
        variants: "",
      });
    }
    handleChange("model", data);
  };

  const handleKmDrivenChange = (data) => {
    // const re = /^([0-9]){4,6}$/;
    let vehicleDetails = "";
    const re = /^[0-9\b]+$/;
    if (!data.value) {
      vehicleDetails = validationService.updateValObjWithError(
        `KmDriven ${mandatoryText}!`
      );
    } else if (!re.test(data.value)) {
      vehicleDetails = validationService.updateValObjWithError(
        `Enter a Valid Number for Km Driven!`
      );
    } else {
      vehicleDetails = validationService.updateValObjWithVal(data);
    }
    setCarDetails({
      ...carDetails,
      kmDriven: vehicleDetails,
    });
  };

  const handleKmDrivenDispatch = (data) => {
    let vehicleDetails = "";
    const re = /^[0-9\b]+$/;
    if (!data.value) {
      vehicleDetails = validationService.updateValObjWithError(
        `KmDriven ${mandatoryText}!`
      );
    } else if (!re.test(data.value)) {
      vehicleDetails = validationService.updateValObjWithError(
        `Enter a Valid Number for Km Driven!`
      );
    } else {
      vehicleDetails = validationService.updateValObjWithVal(data);
    }
    dispatch(postAdActions.addVehicleKmDriven(vehicleDetails));
  };
  const textStyle = (text) => {
    let title = text[0].toUpperCase() + text.slice(1).replace("_", " ");
    return title.replace(/([A-Z])/g, " $1").trim();
  };

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
                componentToPassDown={
                  <FormAutoComplete
                    label="Brand"
                    id="brand"
                    options={carAttr.brands}
                    onChange={(event, data) => {
                      handleChange("brand", data);
                    }}
                  />
                }
              />

              <GridItem
                size={[12, 6, 4]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Model"
                    options={carAttr.models}
                    onChange={(event, data) => {
                      handleChange("model", data);
                    }}
                  />
                }
              />
              <GridItem
                size={[12, 6, 4]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Variant"
                    options={carAttr.variants}
                    onChange={(event, data) => {
                      handleChange("variant", data);
                    }}
                  />
                }
              />
            </Grid>
          </Box>
          <Divider />
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={5}>
              {["year", "condition", "fuelType", "bodyType"].map((cond) => {
                return (
                  <GridItem
                    key={cond}
                    size={[12, 6, 3]}
                    componentToPassDown={
                      <FormAutoComplete
                        label={textStyle(cond)}
                        id={cond}
                        options={carAttr[cond + "s"]}
                        onChange={(event, data) => {
                          handleChange(cond, data);
                        }}
                      />
                    }
                  />
                );
              })}
            </Grid>
          </Box>
          <Divider />
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={5}>
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Transmission"
                    id="transmission"
                    options={carAttr.transmissions}
                    onChange={(event, data) => {
                      handleChange("transmission", data);
                    }}
                  />
                }
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="No Of Owners"
                    id="noOfOwners"
                    options={carAttr.noOfOwners}
                    onChange={(event, data) => {
                      handleChange("noOfOwners", data);
                    }}
                  />
                }
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <TextField
                    fullWidth
                    id="vehicle-kmDriven"
                    label="Km Driven"
                    name="kmDriven"
                    onChange={(e) =>
                      handleKmDrivenChange({ value: e.target.value })
                    }
                    onBlur={(e) =>
                      handleKmDrivenDispatch({ value: e.target.value })
                    }
                    required
                    inputProps={{ maxLength: 6 }}
                    value={carDetails.kmDriven.value}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">KM</InputAdornment>
                      ),
                    }}
                  />
                }
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
