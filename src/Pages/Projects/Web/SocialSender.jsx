import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spacer from '../../../Components/Helpers/Spacer';
import Image1 from '../../../Images/SocialSender/1.jpg'
import Image2 from '../../../Images/SocialSender/2.jpg'
import Image3 from '../../../Images/SocialSender/3.jpg'
import Image4 from '../../../Images/SocialSender/4.jpg'

const Images = [{ original: Image1, thumbnail: Image1 }, { original: Image2, thumbnail: Image2 }, { original: Image3, thumbnail: Image3 }, { original: Image4, thumbnail: Image4 }]

export default function SocialSender() {
    return <Container maxWidth="md" >
        <Typography variant="h3" align="center">Social Sender</Typography>
        <Spacer />
        <ImageGallery items={Images} showFullscreenButton infinite showThumbnails showPlayButton={false}></ImageGallery>
        <Typography variant="body2" align="center"> Developed with: .Net Core, Hangfire, React.js, Material UI </Typography>
        <Spacer />
        <Typography variant="body1">
            Social Sender is a social media scheduler and automation app that give and suggests content that are in the categories that are selected, then allow you to customize it or create your own.<br />
            <br />
            This is version two of the app (Originally called SMART), that was built fully in .net framework with an API, ASP Web App, Xamarin mobile app, and the automation being a windows console app that ran aside the API. This was one of my first project and a lot was learnt from its development.<br />
            <br />
            Social Sender was a fresh start using .net core and a React PWA web app. My part in the project was mostly on the back end handling the API and automation side of the app, integrating with Facebook via their Rest API, Twitter with a third-party package Tweetinvi, and resonantly with LinkedIn&apos;s Rest API  <br />
            <br />
            On the front end I did the admin portal for managing content and implementing the CRON paten generator allowing admins and users to flexibly schedule content<br />
        </Typography>
    </Container>
}