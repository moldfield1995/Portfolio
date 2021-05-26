import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Hero from '../PageElements/Hero';
import Spacer from './Spacer';
import SocialLinks from '../PageElements/SocialLinks';
const useStyles = makeStyles(() => ({

}));

export default function Layout({children}) {
    const classes = useStyles();
    return <div className={classes.root}>
        <Hero />
        <Spacer />
        {children}
        <Spacer />
        <SocialLinks />
    </div>
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};