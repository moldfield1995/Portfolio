import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

const useStyles = makeStyles((theme) => ({
    youtube: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

export default function PlanetMiner() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Planet Miner</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/73jnusAjX0I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Typography variant="body2" align="center"> Developed with: Unity </Typography>
        <Spacer />
        <Typography variant="body1">
            This project is a recreation of one of the mechanics in the game Eve Online called <Link href="https://i.ytimg.com/vi/4zU6hmUdKBM/maxresdefault.jpg" target="_blank" rel="noopener noreferrer" color="secondary">Planet Interaction. </Link><br/>
            <br/>
            I have the created a shader and detection for the amount of resources there at any point which will be used for mining later. I have implemented the heat map, that can handle 20 values but can be scaled up, as well as having a global sensitivity that the user can interact with. In the demo multiple ore layers can be generated and come back to them while being performant on both PC and mobile.<br/>
            <br/>
            Initially this project seemed simple, but some of the mining systems are lot harder to implement than anticipated. I plan to come back to this project and add the mining and refining process and then the node degradation over time.
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            Source: <Link href="https://www.github.com/moldfield1995/PlanetMiner" target="_blank" rel="noopener noreferrer" color="secondary">GitHub </Link>
        </Typography>
    </Container>
}