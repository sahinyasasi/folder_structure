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
                      <Check name="acFront" />
                      <Check name="acRear" />
                      <Check name="backupCamera" />
                      <Check name="cruiseControl" />
                      <Check name="navigation" />
                      <Check name="powerLocks" />
                      <Check name="powerSteering" />
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
                      <Check name="amFmSterio" />
                      <Check name="cdPlayer" />
                      <Check name="dvdSystem" />
                      <Check name="mp3Player" />
                      <Check name="portableAudio" />
                      <Check name="premiumAudio" />
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
                      <Check name="airbagDriver" />
                      <Check name="airbagPassenger" />
                      <Check name="antilockBrakes" />
                      <Check name="bluetooth" />
                      <Check name="handsFree" />
                      <Check name="fogLights" />
                      <Check name="securitySystem" />
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
                      <Check name="bucketSeats" />
                      <Check name="heatedSeats" />
                      <Check name="leatherInterior" />
                      <Check name="memorySeats" />
                      <Check name="powerSeats" />
                      <Check name="thirdRowSeats" />
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
                      <Check name="powerWindows" />
                      <Check name="windowsDefroster" />
                      <Check name="rearWindow" />
                      <Check name="wiperTintedGlass" />
                      <Check name="sunroof" />
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
                      <Check name="alloyWheels" />
                      <Check name="keylessEntry" />
                      <Check name="towPackage" />
                      <Check name="trailerHitch" />
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
