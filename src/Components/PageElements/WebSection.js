import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core';
import dairyDrop from '../../Images/WebLogos/DairyDrop.png'
import webSpares from '../../Images/WebLogos/WebSpares.png'
import uniformExchange from '../../Images/WebLogos/UniformExchange.png'
import socialSendr from '../../Images/WebLogos/SocialSendr.png'
import servico from '../../Images/WebLogos/Servico.png'
import venture from '../../Images/WebLogos/venture_tax.svg'
import azureIcon from '../../Images/WebLogos/Azure.svg'
import CircleButton from '../Helpers/CircleButton';
import { Description, DirectionsBoat } from '@material-ui/icons';
import Spacer from '../Helpers/Spacer';

export default function WebSection({openModal}) {
    return <Container maxWidth="md">
        <Typography variant="h2" component="h3" gutterBottom align='center'>
            Web
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom align='center'>
            Public Projects
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Web Spares' image={webSpares} backgroundColor='#ffffff' onClick={() => {openModal('WebSpares') }} descriptor="Web Spares is an e-commerce platform specializing in part brake down by blueprint. It is built on Umbraco with a custom React CMS editor." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Uniform Exchange' image={uniformExchange} backgroundColor='#ffffff' onClick={() => {openModal('UniformExchange') }} descriptor="A digitized version of Uniform Exchange uniform request's system to allow families in need get new uniforms." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Social Sender' image={socialSendr} backgroundColor='#ffffff' onClick={() => { openModal('SocialSender')}} descriptor="An Automated social media poster that suggested scheduled content and allows you to customize or create your own." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Dairy Drop' image={dairyDrop} backgroundColor='#ffffff' onClick={() => { openModal('DairyDrop')}} descriptor="Diary drop allows diary's to easily connect with users, allowing them to receive products to their door every week." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Servico' image={servico} backgroundColor='#000000' onClick={() => { openModal('Servico')}} descriptor="A website designed for a client where the designs were provided and made in Piranha CSM." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Venture Tax' image={venture} backgroundColor='#ffffff' onClick={() => {openModal('VentureTax') }} descriptor="A Large website with a lot of small components and blog, made in Piranha CSM." />
            </Grid>
        </Grid>
        <Spacer />
        <Typography variant="h4" component="h4" gutterBottom align='center'>
            Private Projects
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Azure Sales Analyst' image={azureIcon} backgroundColor='#ffffff' onClick={() => {openModal('AzureSalesAnalyst') }} descriptor="A tool that took azure cloud customers and pricing, alongside a dynamic query service, to generate potential upsells." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Marine Test and Documentation' icon={<DirectionsBoat/>} backgroundColor='#ffffff' onClick={() => { openModal('MarineTest')}} descriptor="A mobile and web application to test yacht crew and track their certification." />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CircleButton text='Document Digitization and generation' icon={<Description/>} backgroundColor='#ffffff' onClick={() => {openModal('DocumentDigitization') }} descriptor="A web application that modernized and digitized an existing company workflow." />
            </Grid>
        </Grid>
    </Container>
}

WebSection.propTypes = {
    openModal: PropTypes.func.isRequired,
};