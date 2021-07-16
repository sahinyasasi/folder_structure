import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
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

const CustomRouterLink = ({ to, variant, title, ...props }) => {
  const classes = useStyles();
  return (
    <RouterLink to={to} className={classes.routerLink} {...props}>
      <Typography variant={variant} className={classes.title}>
        {title}
      </Typography>
    </RouterLink>
  );
};
export default CustomRouterLink;
