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

export default function Vrrrr() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h3" align="center">Vrrrr</Typography>
        <Spacer />
        <iframe width="560" height="512" src="https://www.youtube.com/embed/8tm5TMq_3SU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.youtube}></iframe>
        <Typography variant="body2" align="center"> Developed with: Unreal Engine </Typography>
        <Spacer />
        <Typography variant="body1">
            This was a one-week game jam that was done in Canalside near the holidays. A few members had been interested in doing a project in VR and after some deliberation this was what was settled on.<br/>
            <br/>
            We initially started using Unreal, but as most of the programmers where not familiar with Unreal a test was done with Unity. The project ended up staying in Unreal as Unity physics did not hand collision with fast moving non physics objects well and the golf balls would need custom coding.<br/>
            <br/>
            Most of the gameplay was programmed by myself, and the visual side was done by 4 designers with help from another programmer. This game jam was very successful but we all decided that taking it forward would be difficult as some complex physics would need to be fixed, as the hitting the golf ball is not consistent, and there was already some good VR golf games released on Steam.
        </Typography>
    </Container>
}