import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Spacer from '../../Components/Helpers/Spacer';

export default function EducationSection() {
    return <Container maxWidth="sm" >
        <Typography variant="h3" align="center">Education </Typography>
        <Spacer />
        <Typography variant="h4" align="center" gutterBottom>Bsc (Hons) Computer Games Programming</Typography>
        <Typography variant="body1" align="center">
            Graduated with honors<br/>
            2014-2018
        </Typography>
    </Container>
}