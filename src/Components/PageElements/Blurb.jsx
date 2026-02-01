import React from 'react';
import { Container,  Typography } from '@material-ui/core';


export default function Blurb() {
    return <Container maxWidth="sm">
        <Typography variant="body2" gutterBottom>
            A long-time tech enthusiast turned Software Developer, I transitioned from game development to full-stack web development. Currently, I focus on optimizing applications and building innovative healthcare solutions. <br/>
            My background spans custom websites, eCommerce, and the games industry, including a published title, Flux8. I am now dedicated to leveraging my skills to solve unique challenges and develop impactful products.
            Majority of the sites were written with a .Net Core API using monolithic API architecture and React.js front end, with others built with .Net MVC using SASS and js.
        </Typography>
    </Container>
}