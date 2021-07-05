import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const FormSelect = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <InputLabel>Value</InputLabel>
      <Select value={value} onChange={handleChange} {...props}>
        {props.options.map((opt) => {
          return (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};
export default FormSelect;
