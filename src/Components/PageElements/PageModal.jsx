import React from 'react';
import PropTypes from 'prop-types';
import { PageNames } from '../Helpers/Constants';
import { Dialog, IconButton, makeStyles } from '@material-ui/core';
import { AzureSalesAnalyst, CandC, DairyDrop, DocumentDigitization, Flux8, HoverHavoc, MarineTest, PlanetMiner, Servico, SocialSender, UniformExchange, VentureTax, Vrrrr, WebSpares } from '../../Pages/Projects';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
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
            case PageNames.Flux8:
                return <Flux8 />;
            case PageNames.CandC:
                return <CandC />;
            case PageNames.PlanetMiner:
                return <PlanetMiner />;
            case PageNames.Vrrrr:
                return <Vrrrr />;
            case PageNames.HoverHavoc:
                return <HoverHavoc />;
            case PageNames.WebSpares:
                return <WebSpares />;
            case PageNames.UniformExchange:
                return <UniformExchange />;
            case PageNames.SocialSender:
                return <SocialSender />;
            case PageNames.DairyDrop:
                return <DairyDrop />;
            case PageNames.Servico:
                return <Servico />;
            case PageNames.VentureTax:
                return <VentureTax />;
            case PageNames.AzureSalesAnalyst:
                return <AzureSalesAnalyst />;
            case PageNames.DocumentDigitization:
                return <DocumentDigitization />;
            case PageNames.MarineTest:
                return <MarineTest />;
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