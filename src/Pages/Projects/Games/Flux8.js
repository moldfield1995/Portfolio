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

export default function Flux8() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Flux 8</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/EXOLqQ-7KPQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Typography variant="body2" align="center"> Developed with: Unity </Typography>
        <Spacer />
        <Typography variant="body1">
            This project was part of my one year placement at Canalside Studios and then further developed while at Torchbearer to port the game to the Nintendo. Flux8 was conceptualized when I attempted to stick a magnetic board wiper to a nonmagnetic board and it grew from there.<br/>
            <br/>
            It is a puzzle platformer where the player controls magnets of opposing forces, solving puzzles using magnetic fields around the level and can be played single player or local co-op. It has an in-game level editor that allows players to create an endless amount of levels and then upload them to Steam Workshop for other people to play.<br/>
            <br/>
            As part of the initial development I did the majority of the optimization, as well as a rewrite of the player physics and controls, UX and UI improvements to the level editor, and back end development for analytics system including the integration with Steam Workshop using Facepunch&apos;s implementation with minor modifications.<br/>
            <br/>
            The Nintendo Switch port was entirely done by me between working on web projects at Torchbearer. It involved optimizations across the whole project including re-implementing all shaders and some level rebuilds. I also had re-implement any video rendering, file saving and controller implementation to work correctly with the Switch.
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            Release Dates: PC - August 2017, Switch - May 2020 <br/>
            Stores: <Link href="https://store.steampowered.com/app/658810/Flux8/" target="_blank" rel="noopener noreferrer" color="secondary">Steam </Link>, <Link href="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Flux8-1771534.html" target="_blank" rel="noopener noreferrer" color="secondary">Switch</Link>
        </Typography>
    </Container>
}