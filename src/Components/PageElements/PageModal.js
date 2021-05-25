import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CandC, Flux8, HoverHavoc, PlanetMiner, UniformExchange, Vrrrr, WebSpares } from '../../Pages/Projects';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiContainer-root': {
            padding: '40px 20px'
        }
    },
    closeButton: {
        position: 'absolute',
        right: '10px'
    }

}));

function PageModalRender({ open, currentPage, onClose }) {
    const classes = useStyles();

    function GetPage() {
        switch (currentPage) {
            case 'Flux8':
                return <Flux8 />;
            case 'CandC':
                return <CandC />;
            case 'PlanetMiner':
                return <PlanetMiner />;
            case 'Vrrrr':
                return <Vrrrr />;
            case 'HoverHavoc':
                return <HoverHavoc />;
            case 'WebSpares':
                return <WebSpares />;
            case 'UniformExchange':
                return <UniformExchange />;
            default:
                return null;
        }
    }

    return <Dialog maxWidth="lg" open={open} onClose={onClose} className={classes.root}>
        <IconButton onClick={onClose} color="secondary" className={classes.closeButton}><Close fontSize="large" /> </IconButton>

        {GetPage()}
    </Dialog>
}

const PageModal = React.memo(PageModalRender,
    function areEqual(prevProps, currentProps) {
        return prevProps.open === currentProps.open &&
            prevProps.currentPage === currentProps.currentPage;
    });

export default PageModal;

PageModalRender.propTypes = {
    open: PropTypes.bool.isRequired,
    currentPage: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};