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

export default function AzureSalesAnalyst() {
    const classes = useStyles();
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Azure Sales Analyst</Typography>
        <Spacer />
        <Typography variant="body2" align="center"> Developed with: .Net Core, React.js, Material UI </Typography>
        <Spacer />
        <Typography variant="body1">
            This project was requested by a Microsoft Cloud Partner, To pull in current customer data including including current subscriptions and query the data to find pertenshal upsells and then generate opportunities in Dynamics CRM<br />
            <br />
            This project had a lot of complexity, with Authentication being provided by an Azure tenancy, handeling and processing 300mb+ of raw product data, and creating a system that allowed generation of dynamic Fluent queries made to Identify upsells. <br />
            <br />
            I used a tree structure with logical types (And, or, data comparison) to make it easy and store and process the queries generated, then used a package called NeinLinq to help me targe a fixed set of data and concatinate logic statements. Check where then done to make sure the upsell generated more that was lost, and then the result was stored.<br />
            <br />
            This was all brought together with a React web app, that displayed the a over view of all generated upsells, and let them dive into them to a per customer level, with relevant documentation and links provided why this upsell was suggested.
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://servicowebsite.azurewebsites.net/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}