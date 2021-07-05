import React from "react";
import { Grid } from "@material-ui/core";

const GridItem = (props) => {
  return (
    <Grid
      item
      lg={props.size[3]}
      md={props.size[2]}
      sm={props.size[1]}
      xs={props.size[0]}
    >
      {props.componentToPassDown}
    </Grid>
  );
};
export default GridItem;
