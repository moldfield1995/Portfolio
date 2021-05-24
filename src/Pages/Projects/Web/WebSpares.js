import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/WebSpares/1.jpg'
import Image2 from '../../../Images/WebSpares/2.jpg'
import Image3 from '../../../Images/WebSpares/3.jpg'
import Image4 from '../../../Images/WebSpares/4.jpg'

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

const Images =[{original: Image1, thumbnail: Image1}, {original:Image2, thumbnail: Image2},{original:Image3, thumbnail: Image3}, {original:Image4, thumbnail: Image4}]

export default function WebSpares() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Web Spares</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Spacer />
        <Typography variant="body1">
            Web Spares is Ecommerce site that brakes down assemblies into their individual parts, with matching interactive svg that highlights parts when hovered over in the product table and in the svg.<br />
            <br />
            The initial work was around the custom Ecommerce website using Umbraco CMS with the Merchello plugin for Ecommerce. I worked on the SVG interaction and the table, that was done with css selectors and hooks js within the SVG<br />
            <br />
            Soon after they requested an implementation with WooCommerce, where the Merchello would be bypassed and all the Ecommerce would be handled by a separate WooCommerce Instance. I took the exiting hooks and implemented Relevant API Requests and Implemented cart hooks for the basket.<br />
            <br />
            Lastly after implementing a few products in the demo site, they requested a react app that would sit on the back end that would create a product and page at the same time. They requested most of the CMS features to be available in the react app, that required reverse engineering the requests made by the current CMS and then implementation. <br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://app.webspares.net/trailer-low-loader/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}