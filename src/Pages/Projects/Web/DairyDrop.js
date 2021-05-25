import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/DairyDrop/1.jpg'
import Image2 from '../../../Images/DairyDrop/2.jpg'

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '50vh',
        maxHeight: 512
    }
}));

const Images = [{ original: Image1, thumbnail: Image1 }, { original: Image2, thumbnail: Image2 }]

export default function DairyDrop() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Dairy Drop</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Typography variant="body2" align="center"> Developed with: .Net Core, React.js, Material UI </Typography>
        <Spacer />
        <Typography variant="body1">
            Dairy drop is a milk man delivery subscription service, that allows customers connect directly to dairies near them. <br />
            <br />
            I mostly developed the API and admin screens for dairy drop, this included a payment system, a order system that allowed editing and acceptance by dairies, a holiday system to allow temporary pausing of orders, and screens that showed sales stats and dairy management. <br />
            <br />
            This project was one of the longest projects in active development and has changed a lot since its initial outset. We initially used Gocardless, a direct debit payment system, which caused a lot of problems with non payment because it would take a few days for us to be notified, allowing them to have product for free.<br />
            <br />
            To handel this we switched to Stripe taking payment 24h ahead for new orders and gave active customers 24h to resolve payment issues, as well as better notification to the dairies. <br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://app.dairydrop.com/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}