import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getInitials from "../../../utils/getInitials";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { userActions } from "../../../actions";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const user = JSON.parse(localStorage.getItem("a2z_kars_user"));

const List = ({ mobileOpen }) => {
  const classes = useStyles();

  const ref = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log("logouttttt..");
    handleClose();
    dispatch(userActions.logout());
    history.push("/login");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <AccountCircleIcon className={classes.avatar} />
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/register">
          Register
        </MenuItem>
        <MenuItem component={RouterLink} to="/login">
          Login
        </MenuItem>
        <Hidden lgUp>
          <MenuItem component={RouterLink} to="/postad">
            Sell
          </MenuItem>
          <MenuItem component={RouterLink} to="/listings">
            Buy
          </MenuItem>
        </Hidden>
      </Menu>
    </>
  );
};

export default List;
