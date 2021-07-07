import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PassWord = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    console.log("handleClickShowPassword ===========");
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth variant="outlined" required margin="normal">
      <InputLabel htmlFor="post-login-pwd">Password</InputLabel>
      <OutlinedInput
        id="post-login-pwd"
        type={showPassword ? "text" : "password"}
        name="password"
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
};
export default PassWord;
