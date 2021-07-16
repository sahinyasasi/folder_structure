import React from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import {
  AppBar,
  Box,
  Hidden,
  Toolbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import List from "./List";
import Account from "./Account";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation, matchPath } from "react-router-dom";
import CustomRouterLink from "../CustomRouterLink";
const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    minHeight: 64,
  },
  title: {
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  routerLink: {
    textDecoration: "none",
  },
}));
const user = JSON.parse(localStorage.getItem("a2z_kars_user"));
const TopBar = ({ className, onClick, ...rest }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
      position="fixed"
    >
      <Toolbar className={classes.toolbar}>
        {location.pathname === "/" && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <CustomRouterLink to="/" variant="h5" title="A2z Kars" />

        <Box ml={2} flexGrow={1} />
        <Hidden mdDown>
          <Box>
            <CustomRouterLink to="/postad" variant="h6" title="Sell A Car" />
          </Box>
          <Box ml={2}>
            <CustomRouterLink to="/listings" variant="h6" title="Buy A Car" />
          </Box>
          <Box ml={2}>
            <Account />
          </Box>
        </Hidden>
        <Hidden lgUp>
          <Box ml={2}>{user ? <Account /> : <List />}</Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
