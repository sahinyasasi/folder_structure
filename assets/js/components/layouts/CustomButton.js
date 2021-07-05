import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = (props) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {props.title}
    </Button>
  );
};
export default CustomButton;
