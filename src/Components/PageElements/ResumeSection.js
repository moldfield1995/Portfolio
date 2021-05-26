import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

export default function ResumeSection() {
    const classes = useStyles();
    return <Container maxWidth="sm" >
        <Typography variant="h2" align="center" gutterBottom>Torchbearer Interactive</Typography>
        <Typography variant="body1" align="center"> 
        
         </Typography>
        <Typography variant="body1">
            2018-Current
        </Typography>
        <Spacer />
        <Typography variant="h2" align="center" gutterBottom>Canalside Studios</Typography>
        <Typography variant="body1" align="center"> 
        
         </Typography>
        <Typography variant="body1">
            2016-2017
        </Typography>
    </Container>
}