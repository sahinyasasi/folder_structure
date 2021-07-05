import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <TextField
      onChange={handleChange}
      margin="normal"
      variant="outlined"
      {...props}
    />
  );
};

export default FormInput;
