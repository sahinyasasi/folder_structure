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

    return (
      <FormCheckBox
        title={title}
        name={props.name}
        {...props}
        onChange={handleChange}
      />
    );
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
    //console.log(carFeatures);
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
                      <Check name="acFront" checked={carFeatures.acFront} />
                      <Check name="acRear" checked={carFeatures.acRear} />
                      <Check
                        name="backupCamera"
                        checked={carFeatures.backupCamera}
                      />
                      <Check
                        name="cruiseControl"
                        checked={carFeatures.cruiseControl}
                      />
                      <Check
                        name="navigation"
                        checked={carFeatures.navigation}
                      />
                      <Check
                        name="powerLocks"
                        checked={carFeatures.powerLocks}
                      />
                      <Check
                        name="powerSteering"
                        checked={carFeatures.powerSteering}
                      />
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
                      <Check
                        name="amFmSterio"
                        checked={carFeatures.amFmSterio}
                      />
                      <Check name="cdPlayer" checked={carFeatures.cdPlayer} />
                      <Check name="dvdSystem" checked={carFeatures.dvdSystem} />
                      <Check name="mp3Player" checked={carFeatures.mp3Player} />
                      <Check
                        name="portableAudio"
                        checked={carFeatures.portableAudio}
                      />
                      <Check
                        name="premiumAudio"
                        checked={carFeatures.premiumAudio}
                      />
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
                      <Check
                        name="airbagDriver"
                        checked={carFeatures.airbagDriver}
                      />
                      <Check
                        name="airbagPassenger"
                        checked={carFeatures.airbagPassenger}
                      />
                      <Check
                        name="antilockBrakes"
                        checked={carFeatures.antilockBrakes}
                      />
                      <Check name="bluetooth" checked={carFeatures.bluetooth} />
                      <Check name="handsFree" checked={carFeatures.handsFree} />
                      <Check name="fogLights" checked={carFeatures.fogLights} />
                      <Check
                        name="securitySystem"
                        checked={carFeatures.securitySystem}
                      />
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
                      <Check
                        name="bucketSeats"
                        checked={carFeatures.bucketSeats}
                      />
                      <Check
                        name="heatedSeats"
                        checked={carFeatures.heatedSeats}
                      />
                      <Check
                        name="leatherInterior"
                        checked={carFeatures.leatherInterior}
                      />
                      <Check
                        name="memorySeats"
                        checked={carFeatures.memorySeats}
                      />
                      <Check
                        name="powerSeats"
                        checked={carFeatures.powerSeats}
                      />
                      <Check
                        name="thirdRowSeats"
                        checked={carFeatures.thirdRowSeats}
                      />
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
                      <Check
                        name="powerWindows"
                        checked={carFeatures.powerWindows}
                      />
                      <Check
                        name="windowsDefroster"
                        checked={carFeatures.windowsDefroster}
                      />
                      <Check
                        name="rearWindow"
                        checked={carFeatures.rearWindow}
                      />
                      <Check
                        name="wiperTintedGlass"
                        checked={carFeatures.wiperTintedGlass}
                      />
                      <Check name="sunroof" checked={carFeatures.sunroof} />
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
                      <Check
                        name="alloyWheels"
                        checked={carFeatures.alloyWheels}
                      />
                      <Check
                        name="keylessEntry"
                        checked={carFeatures.keylessEntry}
                      />
                      <Check
                        name="towPackage"
                        checked={carFeatures.towPackage}
                      />
                      <Check
                        name="trailerHitch"
                        checked={carFeatures.trailerHitch}
                      />
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
