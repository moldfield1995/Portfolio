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

export default function CandC() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Command and Crumble</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/gx67KOLWnjI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Spacer />
        <Typography variant="body1">
            This is my current group project game that we are developing. There are 3 programmers including myself and 4 designers.<br/>
            <br/>
            This project initially started in Unreal with the intension of designers implementing animation, VFX and doing the shader work. This worked fine but we found Unreal’s Units would sometimes fly of the screen or sometimes be unresponsive. We switched to Unity as the programmers where a lot more familiar and had most of the features we had in unreal implemented within a week.<br/>
            <br/>
            We are currently approaching beta and have greatly improved the feel of the unit control, the UI and the overall look of the game.
        </Typography>
    </Container>
}