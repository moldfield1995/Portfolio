import React from 'react';
import { Container,  Typography } from '@material-ui/core';


export default function Blurb() {
    return <Container maxWidth="sm">
        <Typography variant="body2" gutterBottom>
            I am a web developer with a games programming background. <br/>
            I have developed a variety of websites from: In house quoting tools, custom e-commerce solutions, company pages with CMS backend, social media schedulers, and in house sales analysis web tools. <br/>
            Majority of the sites were written with a .Net Core API using monolithic API architecture and React.js front end, with others built with .Net MVC using SASS and js.
        </Typography>
    </Container>
}