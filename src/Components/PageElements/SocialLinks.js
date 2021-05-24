import React from 'react';
import { Button, Container,  IconButton,  makeStyles,  Typography } from '@material-ui/core';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent: 'space-around'
    }
}));

export default function SocialLinks() {
    const classes = useStyles();
    return <Container maxWidth="sm" className={classes.root}>
            <IconButton href="" color="secondary" ><LinkedIn fontSize="large"/> </IconButton>
            <IconButton href="" color="secondary" ><Facebook fontSize="large"/> </IconButton>
            <IconButton href="" color="secondary" ><Twitter fontSize="large"/> </IconButton>
    </Container>
}