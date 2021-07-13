import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { THEMES } from "../../../../constants/themes"
import clsx from "clsx";
import {
    AppBar,
    Box,
    Hidden,

    Toolbar,
    makeStyles,

    Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import Account from './Account';
const useStyles = makeStyles((theme) => ({
    root: {

    },
    toolbar: {
        minHeight: 64,
    },
    title: {
        color: "white",
    },
}));

const TopBar = ({ className, ...rest }) => {
    const classes = useStyles();


    return (
        <AppBar className={clsx(classes.root, className)} {...rest}>
            <Toolbar className={classes.toolbar}>

                <RouterLink to="/">
                    <Typography variant="h6" className={classes.title}>
                        A2Z Kars
                    </Typography>
                </RouterLink>

                <Box ml={2} flexGrow={1} />
                <Hidden mdDown >
                    <Box>
                        <RouterLink to="/postad">
                            <Typography variant="h6" className={classes.title}>
                                Sell A Car
                            </Typography>
                        </RouterLink>
                    </Box>
                    <Box ml={2}>
                        <RouterLink to="/listings">
                            <Typography variant="h6" className={classes.title}>
                                Buy A Car
                            </Typography>
                        </RouterLink>
                    </Box>
                    <Box ml={2}>
                        <Account />
                    </Box>
                </Hidden>
                <Hidden lgUp >
                    <Box ml={2}>
                        <Account />
                    </Box>
                </Hidden>
            </Toolbar>

        </AppBar>
    )
}
export default TopBar
