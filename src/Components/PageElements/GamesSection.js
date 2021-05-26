import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid,  Typography } from '@material-ui/core';
import flux8 from '../../Images/GamesLogos/Flux8.jpg';
import HoverHavoc from '../../Images/GamesLogos/HoverHavoc.jpg';
import Vrrr from '../../Images/GamesLogos/Vrrr.jpg';
import PlanetMiner from '../../Images/GamesLogos/PlanetMiner.jpg';
import CandC from '../../Images/GamesLogos/CandC.png';
import CircleButton from '../Helpers/CircleButton';
import Spacer from '../Helpers/Spacer';

export default function GamesSection({ openModal }) {
    return <Container maxWidth="md">
        <Typography variant="h2" component="h3" gutterBottom align='center'>
            Games
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom align='center'>
            Released Games
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Flux 8' image={flux8} fullSize onClick={() => { openModal('Flux8') }} descriptor="Flux 8 is a puzzle platformer developed while at Canalside Studios for PC, Mac and Linux, that was then ported to Nintendo Switch." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Hover Havoc Winter Update' image={HoverHavoc} fullSize onClick={() => { openModal('HoverHavoc') }} descriptor="Hover Havoc is a couch coop party brawler. While at Canalside Studios we updated last years game adding new maps, implemented unused assets, and performed some optimization for a christmas sale" />
            </Grid>
        </Grid>
        <Spacer />
        <Typography variant="h4" component="h4" gutterBottom align='center'>
            Side Projects
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Vrrrrr' image={Vrrr} fullSize onClick={() => { openModal('Vrrrr') }} descriptor="A VR mini golf game developed in Unreal with a pirate theme. This was developed while at Canalside Studios as a game jam project." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Planet miner' image={PlanetMiner} fullSize onClick={() => { openModal('PlanetMiner') }} descriptor="This was a side project to replicate a game mechanic from the game Eve online. I developed a heat map shader and a corresponding system that gave real values of the map real time to emulate resource quantity" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Command and Crumble' image={CandC} fullSize onClick={() => { openModal('CandC') }} descriptor="Was developed part of my final year group project. It is a Candy themed survival RTS, where the goal is to survive as long as possible against ever increasing waves of candy monsters." />
            </Grid>
        </Grid>
    </Container>
}


GamesSection.propTypes = {
    openModal: PropTypes.func.isRequired,
};