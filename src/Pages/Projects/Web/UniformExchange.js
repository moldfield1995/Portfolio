import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/UniformExchange/1.jpg'
import Image2 from '../../../Images/UniformExchange/2.jpg'
import Image3 from '../../../Images/UniformExchange/3.jpg'
import Image4 from '../../../Images/UniformExchange/4.jpg'
import Image5 from '../../../Images/UniformExchange/5.jpg'

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

const Images = [{ original: Image1, thumbnail: Image1 }, { original: Image2, thumbnail: Image2 }, { original: Image3, thumbnail: Image3 }, { original: Image4, thumbnail: Image4 }, { original: Image5, thumbnail: Image5 }]

export default function UniformExchange() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Uniform Exchange Uniform Request</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Spacer />
        <Typography variant="body1">
            Uniform Exchange is a digitization of a uniform request form for the charity, to make it easier for parents and schools to make requests and for the charity to manage them. <br />
            <br />
            The project was done solely by myself, and was initially going to use a headless CMS, but I was given a tight time scale for this project as it was probono work, so I created a custom product management system to meet their specification.<br />
            <br />
            The system allows creation of products with typed variant system that can handel multiple variant types, a stock system to allow limited product stock (Not currently utilized),and a image system that utilizes the variants to update when a varient is selected to show the user the relevant images (this is not utilized at current)<br />
            <br />
            All data is stored locally in IndexDB upto the point of submission, and data uploaded is limited to only required to complete the request, as to reduce sensitive data stored on our services <br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://order.uniform-exchange.org/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}