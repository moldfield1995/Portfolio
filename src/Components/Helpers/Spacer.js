import React from 'react';
import { makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: 50
    },
}));

export default function Spacer() {
    const classes = useStyles();
    return <div className={classes.root}/>
}