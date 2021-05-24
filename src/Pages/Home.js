import React from 'react';
import { makeStyles } from '@material-ui/core';
import Blurb from '../Components/PageElements/Blurb';
import Spacer from '../Components/Helpers/Spacer';
import WebSection from '../Components/PageElements/WebSection';
import GamesSection from '../Components/PageElements/GamesSection';
import PageModal from '../Components/PageElements/PageModal';

const useStyles = makeStyles((theme) => ({

}));

export default function Home() {
    const [currentOpenModal, setCurrentOpenModal] = React.useState(null);

    const closeModalCallback = React.useCallback(() => {
        setCurrentOpenModal(null);
    }, [setCurrentOpenModal])


    return <div >
        <PageModal open={currentOpenModal !== null} currentPage={currentOpenModal} onClose={closeModalCallback} />
        <Blurb />
        <Spacer />
        <WebSection openModal={setCurrentOpenModal} />
        <Spacer />
        <GamesSection openModal={setCurrentOpenModal} />
    </div>
}