import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Alerts = () => {
  const classes = useStyles();
  const alerts = useSelector((state) => state.alert);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id}>
        <div className={classes.toolbar} />
        <Alert severity={alert.alertType}>{alert.msg}</Alert>
      </div>
    ))
  );
};

export default Alerts;
