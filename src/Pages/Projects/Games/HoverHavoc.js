import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

const useStyles = makeStyles(() => ({
    youtube: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

export default function HoverHavoc() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h3" align="center">Hover Havoc</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/SpQdQN3veOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Typography variant="body2" align="center"> Developed with: Unity </Typography>
        <Spacer />
        <Typography variant="body1">
            Two weeks before Steam winter sale was going to go live we were asked to come up with some ideas for a winter patch then implement, test and release it the day before the winter sale.<br />
            <br />
            This mostly consisted of us creating additional content on the current work frame. This involved creating a new game mode as well as a new map. Some optimizations were also made as well as completion of some weapons that were in the game but hadn’t been completed.<br />
            <br />
            For this task I was responsible for fixing bugs that we found in playtesting, finishing the implementations of the weapons, optimizing areas of the game where possible and doing the final build and testing.
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            Release Date: December 2016 <br />
            Stores: <Link href="http://store.steampowered.com/app/504500/Hover_Havoc/" target="_blank" rel="noopener noreferrer" color="secondary">Steam </Link>
        </Typography>
    </Container>
}