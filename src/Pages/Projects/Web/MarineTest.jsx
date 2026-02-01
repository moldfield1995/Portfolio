import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

export default function MarineTest() {
    return <Container maxWidth="md" >
        <Typography variant="h4" align="center">Marine Test and Documentation</Typography>
        <Spacer />
        <Typography variant="body2" align="center"> Developed with: .Net Core, React.js, Flutter, Material UI </Typography>
        <Spacer />
        <Typography variant="body1">
            This project was for a yacht company that was looking at digitizing and improving the mandatory testing and training, that was extended to include proof of certification and rest.<br />
            <br />
            The initial spec only required one API with mobile app and admin web app, but the scope soon extended requiring an extra Instance and a shared user base. This required converting current solutions to use a API to manage user’s data, which APIs have access to each user, and handle when a user is updated on one platform that the relevant data is updated across the platform.<br />
            <br />
            The mobile apps had to function offline and sync up when at port for a stable connection. This required using a local SQL lite data base and having a system to sync down all required data like questions, documentation, and previous submissions. I did this by breaking it down into sections defined by the relevant API request to give feed back to the user and help with future support.<br />
            <br />
            Part of the proof of certification required data that the user had filled in and sometimes had singed off by a superior, to be added into a PDF form and allow the crew member to download. There were no-good cost-effective solutions for .Net core, so the choice was made for the API to format the data for each field, the use a front end package called pdf-lib, to then edit the document and add the data. This worked well and this was extended to add additional information at the end of the document.<br />
        </Typography>
        <Spacer />
    </Container>
}