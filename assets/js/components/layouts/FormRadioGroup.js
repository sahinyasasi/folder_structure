import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const FormRadioGroup = (props) => {
  const [value, setValue] = React.useState('"');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup value={value} onChange={handleChange}>
      {props.options.map((opt) => {
        return (
          <FormControlLabel key={opt.value} value={opt.value} label={opt.label}>
            {opt.value}
          </FormControlLabel>
        );
      })}
    </RadioGroup>
  );
};
export default FormRadioGroup;
