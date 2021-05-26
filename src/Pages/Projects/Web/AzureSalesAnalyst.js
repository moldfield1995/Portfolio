import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import Spacer from '../../../Components/Helpers/Spacer';

export default function AzureSalesAnalyst() {
    return <Container maxWidth="md" >
        <Typography variant="h2" align="center">Azure Sales Analyst</Typography>
        <Spacer />
        <Typography variant="body2" align="center"> Developed with: .Net Core, React.js, Material UI </Typography>
        <Spacer />
        <Typography variant="body1">
            This project was requested by a Microsoft Cloud Partner, to pull in current customer data including current subscriptions and query the data to find potential upsells and then generate opportunities in Dynamics CRM.<br />
            <br />
            This project had a lot of complexity, with Authentication being provided by an Azure tenancy, handling and processing 300mb+ of raw product data, and creating a system that allowed generation of dynamic Fluent queries made to Identify upsells.<br />
            <br />
            I used a tree structure with logical types (And, or, data comparison) to make it easy and store and process the queries generated, then used a package called NeinLinq to help me targe a fixed set of data and concatenate logic statements. Check where then done to make sure the upsell generated more that was lost, and then the result was stored.<br />
            <br />
            This was all brought together with a React web app, that displayed an overview of all generated upsells, and let them dive into them to a per customer level, with relevant documentation and links provided why this upsell was suggested.<br />
        </Typography>
        <Spacer />
        <Typography variant="body2" align="center">
            <Link href="https://servicowebsite.azurewebsites.net/" target="_blank" rel="noopener noreferrer" color="secondary">View the Site</Link>
        </Typography>
    </Container>
}