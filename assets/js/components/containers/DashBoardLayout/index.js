import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
}))

const DashBoardLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />

        </div>
    )
}
export default DashBoardLayout
