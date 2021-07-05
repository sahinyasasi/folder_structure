import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PostCarDetails from "./PostCarDetails";
import PostCarFeatures from "./PostCarFeatures";
import PostSellerDetails from "./PostSellerDetails";
import PostImages from "./PostImages";

import PostAskingPrice from "./PostAskingPrice";
import PostSubmitDetails from "./PostSubmitDetails";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
          <PostSellerDetails />
          <PostImages />

          <PostAskingPrice />
          <PostSubmitDetails />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
const PostAd = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Sell Car" {...a11yProps(0)} />
            <Tab label="Sell Bike" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PostCarDetails />
          <PostCarFeatures />
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Container>
    </div>
  );
};
export default PostAd;
