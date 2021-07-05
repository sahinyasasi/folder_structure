import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormInput from "./FormInput";

const FormAutoComplete = (props) => {
  return (
    <Autocomplete
      options={props.options}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <FormInput
          {...params}
          label={props.label}
          error={props.error}
          helperText={props.helperText}
          variant="outlined"
          required
        />
      )}
      {...props}
    />
  );
};
export default FormAutoComplete;
