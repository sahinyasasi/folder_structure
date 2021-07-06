import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//const options = [
//{ value: 1, label: 1 },
//{ value: 2, label: 2 },
//];
const FormRadioGroup = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-label="gender"
      name="gender1"
      value={value}
      onChange={handleChange}
      {...props}
    >
      {props.options.map((opt) => {
        return (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
          />
        );
      })}
    </RadioGroup>
  );
};
export default FormRadioGroup;
