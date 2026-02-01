import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import background from '../../Images/background.jpg'
const useStyles = makeStyles(() => ({
    root: {
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        position:'relative'
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    }
}));

export default function Hero() {
    const classes = useStyles();
    return <div className={classes.root}>
        <img src={background} alt="background" className={classes.image}/>
        <Typography variant="h2" align='center' component="h1" gutterBottom >
            Matthew Oldfield
        </Typography>
        <Typography variant="h5" align='center' component="h2" gutterBottom>
            Full stack Web Developer
        </Typography>
    </div>
}