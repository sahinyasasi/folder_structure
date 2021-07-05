import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";

const FormCheckBox = (props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.checked}
          onChange={props.handleChange}
          color={props.color}
        />
      }
      label={<Typography variant="button">{props.title}</Typography>}
      {...props}
    />
  );
};
export default FormCheckBox;
