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


export default function DocumentDigitization() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Document Digitization and Generation</Typography>
        <Spacer />
        <Typography variant="body2" align="center"> Developed with: .Net Framework, Open XML (Docx generation) </Typography>
        <Spacer />
        <Typography variant="body1">
            This was one of the early project with torchbearer, we where asked by a marketing agency to digitize and modernize there workflow of Powerpoints and Word documents into a web application to allow them to better check progress, get client feedback and track tasks.<br/>
            <br/>
            As part of this work I did the initial outline for the API and the document generation. This was a lot more work that expected as they wanted the documents to be 1-1 with their current workflow and in the process of digitization of the workflow, a lot of elements required wysiwyg editors outputting HTML.<br/>
            <br/>
            This not only required me to copy the styles from current documents, but also build a system that would parse through the HTML generating the relevant Word or Powerpoint elements, but also recessively look at any styles applied to the HTML elements and convert them to the closest equivalent.
        </Typography>
        <Spacer />
    </Container>
}