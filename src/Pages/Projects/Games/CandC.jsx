import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

const useStyles = makeStyles(() => ({
    youtube: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

export default function CandC() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h3" align="center">Command and Crumble</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/gx67KOLWnjI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Typography variant="body2" align="center"> Developed with: Unity </Typography>
        <Spacer />
        <Typography variant="body1">
            This was a game that we are developed during our final year for our group project. There are 3 programmers including myself and 4 designers.<br/>
            <br/>
            This project initially started in Unreal with the intension of designers implementing animation, VFX and doing the shader work. This worked fine but we found Unreal’s Units would sometimes fly of the screen or sometimes be unresponsive. We switched to Unity as the programmers where a lot more familiar and had most of the features we had in unreal implemented within a week.<br/>
            <br/>
            My part of the games development was implementing the fog of war, that I user a vertex shader to implement the variation in size and position, the building interaction and UI, and the mining mechanics.
        </Typography>
    </Container>
}