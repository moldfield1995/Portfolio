import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/Servico/1.jpg'
import Image2 from '../../../Images/Servico/2.jpg'

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

const Images = [{ original: Image1, thumbnail: Image1 }, { original: Image2, thumbnail: Image2 }]

export default function Servico() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Servico</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Typography variant="body2" align="center"> Developed with: .Net Core MVC, Pirana CMS </Typography>
        <Spacer />
        <Typography variant="body1">
            Servico was a site that we where contracted to create by a design agency that we work with on custom CMS websites.<br />
            <br />
            I was given a full desinge and asked to create it using Pirana CMS. I made as much as the site as dynamic as possible for them to add additional content or edit at a later date. <br />
            <br />
            The design&apos;s also included two different heros for the home page and gallery, I incorporated this in the CMS to allow them to toggle between either color scheme at a later date if they wanted to change the imagery. <br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://servicowebsite.azurewebsites.net/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}