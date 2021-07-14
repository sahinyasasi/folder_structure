import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
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

import { userActions } from "../../../../actions";
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
const user = { name: "raju", avatar: "NA", tier: "premium" };

const Account = ({ mobileOpen }) => {
    const classes = useStyles();


    const ref = useRef(null);
    const dispatch = useDispatch();

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
        dispatch(userActions.userLogout("/login"));

        // try {
        //   handleClose();
        //   await logout();
        //   history.push('/');
        // } catch (err) {
        //   console.error(err);
        //   enqueueSnackbar('Unable to logout', {
        //     variant: 'error'
        //   });
        // }
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
                <Avatar alt="User" className={classes.avatar} src={user.avatar} />
                <Hidden smDown>
                    <Typography variant="h6" color="inherit">
                        {user.name}
                    </Typography>
                </Hidden>
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
                <MenuItem component={RouterLink} to="/user/profile">
                    Profile
                </MenuItem>
                <MenuItem component={RouterLink} to="/user/account">
                    Account
                </MenuItem>
                <Hidden lgUp >

                    <MenuItem component={RouterLink} to="/postad">
                        Sell A Car
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/listings">
                        Buy A Car
                    </MenuItem>
                </Hidden>
                {/*<MenuItem onClick={handleLogout}>Logout</MenuItem>*/}
                <MenuItem component={RouterLink} to="/login">
                        Login
                    </MenuItem>
            </Menu>
        </>
    );
};

export default Account;
