import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import Spacer from '../../Components/Helpers/Spacer';

export default function ResumeSection() {
    return <Container maxWidth="sm" >
        <Typography variant="h3" align="center">Employment </Typography>
        <Spacer />
        <Typography variant="h4" align="center" gutterBottom>Torchbearer Interactive</Typography>
        <Typography variant="body1" align="center">
            2018-Current
        </Typography>
        <Typography variant="body1" align="center">
            I started with Torchbearer after completing my 4-year Computer games programming course.
            I joined Torchbearer with minimal web development skills with only building static HTML sites,
            and quickly found my place in the team developing the back ends for our websites.
            At Torchbearer I developed several websites with the team, but with more projects being developed in I started doing the front-end development as well.
            All the web projects above were developed with torchbearer, with many of the APIs and database schema being done by myself.
        </Typography>
        <Spacer />
        <Typography variant="h4" align="center" gutterBottom>Canalside Studios</Typography>
        <Typography variant="body1" align="center">
            2016-2017
        </Typography>
        <Typography variant="body1" align="center">
            I was offered a placement in the university in house studio, Canalside.
            As a member of a team of four programmers my role was to release a
            full product by the end of the year. I also took part in open days and
            worked alongside the university for applicant visits giving talks about
            the studio’s history and current projects. I was responsible for
            implementing or tweaking features, and oversaw Git
            management, minor tech support, marketing for our game and
            attending events on behalf of the studio. We released <Link href="/Flux8" color="secondary">Flux8</Link> in August
            and worked on internal projects such as a dungeon defence game for
            mobile, and a <Link href="/Vrrrr" color="secondary">pirate VR golf game</Link>.
         </Typography>
    </Container>
}