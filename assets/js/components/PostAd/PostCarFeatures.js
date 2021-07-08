import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  FormControl,
  FormLabel,
  FormGroup,
  makeStyles,
  Container,
} from "@material-ui/core";
import FormCheckBox from "../layouts/FormCheckBox";
import PostHeader from "./PostHeader";
import GridItem from "../layouts/GridItem";
import { postAdActions } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {},
  cardContent: {},
  cardGrid: {
    marginTop: 10,
  },
  formControl: {
    margin: theme.spacing(),
  },
  submit: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
const PostCarFeatures = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postAd = useSelector((state) => state.postAd.details);
  
  const [carFeatures, setCarFeatures] = useState({
    acFront: false,
    acRear: false,
    backupCamera: false,
    cruiseControl: false,
    navigation: false,
    powerLocks: false,
    powerSteering: false,
    amFmSterio: false,
    cdPlayer: false,
    dvdSystem: false,

    mp3Player: false,
    portableAudio: false,
    premiumAudio: false,
    airbagDriver: false,
    airbagPassenger: false,
    antilockBrakes: false,
    bluetooth: false,
    handsFree: false,
    fogLights: false,
    securitySystem: false,

    bucketSeats: false,
    heatedSeats: false,
    leatherInterior: false,
    memorySeats: false,
    powerSeats: false,
    thirdRowSeats: false,

    powerWindows: false,
    windowsDefroster: false,
    rearWindow: false,
    wiperTintedGlass: false,
    alloyWheels: false,
    keylessEntry: false,
    sunroof: false,
    towPackage: false,
    trailerHitch: false,
  });

  const Check = (props) => {
    const { name } = props;
    const title =
      name[0].toUpperCase() +
      name
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim();

    return <FormCheckBox title={title} name={props.name} {...props} />;
  };
  const Label = (props) => {
    return (
      <FormLabel component="legend">
        {<Typography variant="subtitle2">{props.text}</Typography>}
      </FormLabel>
    );
  };

  const handleChange = (event) => {
    setCarFeatures({
      ...carFeatures,
      [event.target.name]: event.target.checked,
    });
    let vehicleFeatures = "";
    if (postAd.features.length === 0 && !postAd.features.value) {
      vehicleFeatures = {
        ...valObj,
        value: [{ [event.target.name]: event.target.checked }],
      };
    } else {
      if (event.target.checked == true) {
        _.merge(features.value, [
          ...features.value,
          ...[{ [event.target.name]: event.target.checked }],
        ]);
        vehicleFeatures = features;
      } else {
        vehicleFeatures = {
          ...valObj,
          value: features.value.filter(
            (f) => Object.keys(f)[0] !== event.target.name
          ),
        };
        if (vehicleFeatures.value.length === 0) {
          vehicleFeatures = updateValObjWithError(
            `Make sure some of the vehicle features are selected!`
          );
        }
      }
    }
    console.log(vehicleFeatures);

    dispatch(postAdActions.addVehicleFeature(vehicleFeatures));
  };

  const title = "Select Your Car Features";
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <PostHeader title={title} />
      <form autoComplete="off" noValidate className={classes.root}>
        <Card>
          <Divider />
          <CardContent className={classes.cardContent}>
            <Grid container spacing={3}>
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <Label text="Comfort" />
                    <FormGroup>
                      {[
                        "acFront",
                        "acRear",
                        "backupCamera",
                        "navigation",
                        "powerLocks",
                        "powerSteering",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <Label text="Entertainment" />
                    <FormGroup>
                      {[
                        "amFmSterio",
                        "cdPlayer",
                        "dvdSystem",
                        "mp3Player",
                        "portableAudio",
                        "premiumAudio",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      {<Typography variant="subtitle2">Safety</Typography>}
                    </FormLabel>
                    <FormGroup>
                      {[
                        "airbagDriver",
                        "securitySystem",
                        "airbagPassenger",
                        "antilockBrakes",
                        "bluetooth",
                        "handsFree",
                        "fogLights",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <Label text="Seats" />
                    <FormGroup>
                      {[
                        "bucketSeats",
                        "heatedSeats",
                        "leatherInterior",
                        "memorySeats",
                        "powerSeats",
                        "thirdRowSeats",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <Label text="Windows" />
                    <FormGroup>
                      {[
                        "powerWindows",
                        "windowsDefroster",
                        "rearWindow",
                        "wiperTintedGlass",
                        "sunroof",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
              <GridItem
                size={[12, 6, 2]}
                componentToPassDown={
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <Label text="Others" />
                    <FormGroup>
                      {[
                        "alloyWheels",
                        "keylessEntry",
                        "towPackage",
                        "trailerHitch",
                      ].map((data) => {
                        return (
                          <Check
                            name={data}
                            key={data}
                            checked={carFeatures[data]}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                }
              />
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Container>
  );
};
export default PostCarFeatures;
