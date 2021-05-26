import React from 'react';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}));

export default function SocialLinks() {
    const classes = useStyles();
    return <Container maxWidth="sm" className={classes.root}>
        <IconButton href="https://www.linkedin.com/in/m-oldfield" target="_blank" rel="noopener noreferrer" color="secondary" ><LinkedIn fontSize="large" /> </IconButton>
        <IconButton href="https://github.com/moldfield1995/Portfolio" target="_blank" rel="noopener noreferrer" color="secondary" ><GitHub fontSize="large" /> </IconButton>
        <IconButton href="https://www.facebook.com/matold" target="_blank" rel="noopener noreferrer" color="secondary" ><Facebook fontSize="large" /> </IconButton>
        <IconButton href="https://twitter.com/moldfield1811" target="_blank" rel="noopener noreferrer" color="secondary" ><Twitter fontSize="large" /> </IconButton>
    </Container>
}