import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostHeader from "./PostHeader";
import { TextField, InputAdornment } from "@material-ui/core";
import FormAutoComplete from "../layouts/FormAutoComplete";
import GridItem from "../layouts/GridItem";
import { postAdActions } from "../../actions";
import { validationService } from "../../services/validationService";
import { apiService } from "../../services/apiService";

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
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
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

  const getCarBrands = async () => {
    try {
      const response = await apiService.listCarBrands("car");

      setCarAttr({
        ...carAttr,
        brands: arrayToObject(response.data.data),
      });
    } catch (err) {
      console.error(err);
    }
  };
  const getCarModels = async (brand) => {
    try {
      const response = await apiService.listCarModels(brand);
      setCarAttr({
        ...carAttr,
        models: arrayToObject(response.data.data),
      });
    } catch (err) {
      console.error(err);
    }
  };
  const getCarVariants = async (brand, model) => {
    try {
      const response = await apiService.listCarVariants(brand, model);

      setCarAttr({
        ...carAttr,
        variants: arrayToObject(response.data.data),
      });
    } catch (err) {
      console.error(err);
    }
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
    brands: [],
    models: [],
    variants: [],
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
    getCarBrands();
  }, []);
  useEffect(() => {
    if (!brand) return;

    getCarModels(brand);
  }, [brand]);
  useEffect(() => {
    if (!brand && !model) return;

    getCarVariants(brand, model);
  }, [brand, model]);

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
      setBrand(data.value);
      console.log(data.value);
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
      setBrand(carDetails.brand.value);
      setModel(data.value);
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
                      handleBrandChange(data);
                    }}
                    error={
                      postAd.brand && postAd.brand.error
                        ? postAd.brand.error
                        : carDetails.brand.error
                    }
                    helperText={
                      postAd.brand && postAd.brand.error
                        ? postAd.brand.errorText
                        : carDetails.brand.errorText
                    }
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
                      handleModelChange(data);
                    }}
                    error={
                      postAd.model && postAd.model.error
                        ? postAd.model.error
                        : carDetails.model.error
                    }
                    helperText={
                      postAd.model && postAd.model.error
                        ? postAd.model.errorText
                        : carDetails.model.errorText
                    }
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
                    error={
                      postAd.variant && postAd.variant.error
                        ? postAd.variant.error
                        : carDetails.variant.error
                    }
                    helperText={
                      postAd.variant && postAd.variant.error
                        ? postAd.variant.errorText
                        : carDetails.variant.errorText
                    }
                  />
                }
              />
            </Grid>
          </Box>
          <Divider />
          <Box display="flex" p={2} className={classes.cardContent}>
            <Grid container spacing={5}>
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Condition"
                    id="condition"
                    options={carAttr.conditions}
                    onChange={(event, data) => {
                      handleChange("condition", data);
                    }}
                    error={
                      postAd.condition && postAd.condition.error
                        ? postAd.condition.error
                        : carDetails.fuelType.error
                    }
                    helperText={
                      postAd.condition && postAd.condition.error
                        ? postAd.condition.errorText
                        : carDetails.fuelType.errorText
                    }
                  />
                }
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Year"
                    id="year"
                    options={carAttr.years}
                    onChange={(event, data) => {
                      handleChange("year", data);
                    }}
                    error={
                      postAd.year && postAd.year.error
                        ? postAd.year.error
                        : carDetails.fuelType.error
                    }
                    helperText={
                      postAd.year && postAd.year.error
                        ? postAd.year.errorText
                        : carDetails.fuelType.errorText
                    }
                  />
                }
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Fuel Type"
                    id="fueltype"
                    options={carAttr.fuelTypes}
                    onChange={(event, data) => {
                      handleChange("fuelType", data);
                    }}
                    error={
                      postAd.fuel_type && postAd.fuel_type.error
                        ? postAd.fuel_type.error
                        : carDetails.fuelType.error
                    }
                    helperText={
                      postAd.fuel_type && postAd.fuel_type.error
                        ? postAd.fuel_type.errorText
                        : carDetails.fuelType.errorText
                    }
                  />
                }
              />
              <GridItem
                size={[12, 6, 3]}
                componentToPassDown={
                  <FormAutoComplete
                    label="Body Type"
                    id="bodytype"
                    options={carAttr.bodyTypes}
                    onChange={(event, data) => {
                      handleChange("bodyType", data);
                    }}
                    error={
                      postAd.body_type && postAd.body_type.error
                        ? postAd.body_type.error
                        : carDetails.bodyType.error
                    }
                    helperText={
                      postAd.body_type && postAd.body_type.error
                        ? postAd.body_type.errorText
                        : carDetails.bodyType.errorText
                    }
                  />
                }
              />
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
                    error={
                      postAd.transmission && postAd.transmission.error
                        ? postAd.transmission.error
                        : carDetails.transmission.error
                    }
                    helperText={
                      postAd.transmission && postAd.transmission.error
                        ? postAd.transmission.errorText
                        : carDetails.transmission.errorText
                    }
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
                    error={
                      postAd.no_of_owners && postAd.no_of_owners.error
                        ? postAd.no_of_owners.error
                        : carDetails.noOfOwners.error
                    }
                    helperText={
                      postAd.no_of_owners && postAd.no_of_owners.error
                        ? postAd.no_of_owners.errorText
                        : carDetails.noOfOwners.errorText
                    }
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
                    error={
                      postAd.km_driven && postAd.km_driven.error
                        ? postAd.km_driven.error
                        : carDetails.kmDriven.error
                    }
                    helperText={
                      postAd.km_driven && postAd.km_driven.error
                        ? postAd.km_driven.errorText
                        : carDetails.kmDriven.errorText
                    }
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
