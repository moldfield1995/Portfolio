import React from 'react';
import { Container,  Typography } from '@material-ui/core';


export default function Blurb() {
    return <Container maxWidth="sm">
        <Typography variant="body2" gutterBottom>
            I am a web developer with a games programming background. <br/>
            I have developed a variety of website from: custom e-commerce solutions, company pages with CMS backend, social media schedulers, and in house sales analysis web tools. <br/>
            Majority of the sites where written with a .Net Core API and React.js front end, with others built with .Net MVC using SASS and js.
        </Typography>
    </Container>
}