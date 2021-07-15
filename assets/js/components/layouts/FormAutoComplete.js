import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const FormAutoComplete = ({ options, label, error, helperText, ...props }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={error}
          helperText={helperText}
          variant="outlined"
          required
        />
      )}
      {...props}
    />
  );
};
export default FormAutoComplete;
