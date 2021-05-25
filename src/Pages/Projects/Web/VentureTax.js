import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/VentureTax/1.jpg'
import Image2 from '../../../Images/VentureTax/2.jpg'
import Image3 from '../../../Images/VentureTax/3.jpg'
import Image4 from '../../../Images/VentureTax/4.jpg'
import Image5 from '../../../Images/VentureTax/5.jpg'
import Image6 from '../../../Images/VentureTax/6.jpg'
import Image7 from '../../../Images/VentureTax/7.jpg'
import Image8 from '../../../Images/VentureTax/8.jpg'

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

const Images = [{ original: Image1, thumbnail: Image1 }, { original: Image2, thumbnail: Image2 }, { original: Image3, thumbnail: Image3 }, { original: Image4, thumbnail: Image4 },
    { original: Image5, thumbnail: Image5 }, { original: Image6, thumbnail: Image6 }, { original: Image7, thumbnail: Image7 }, { original: Image8, thumbnail: Image8 }]

export default function VentureTax() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Venture Tax</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Spacer />
        <Typography variant="body1">
            Venture tax was a website deigned by torchbearer and built within Pirana CMS<br />
            <br />
            The project was on a tight deadline so we where all working on the website to get it turned over in a week <br />
            <br />
            My job was working on the two blog pages, Client successes and News & views, the FAQ page, and the contact us page. The client successes was also displayed on the home page in a summary form so it had to be designed in a way so the necessary data was accessible on both pages <br />
            <br />
            The contact us page had a unique look to it with the address and contact information overlayed over the map. This worked grate on computer screens but quickly caused problems with the map as the implementation we was using did not allow off center placement. The fix was to brake the design down inline early, as the client didn&apos;t want the extra cost of a dynamic Google Map.<br />
            <br />
            The FAQ section was all generated within ASP using ID selectors for the category selection, and JQuery class selectors to generate the search list after the fact.<br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://venture.tax/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}