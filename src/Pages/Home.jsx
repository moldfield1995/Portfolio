import React from 'react';
import Blurb from '../Components/PageElements/Blurb';
import Spacer from '../Components/Helpers/Spacer';
import WebSection from '../Components/PageElements/WebSection';
import GamesSection from '../Components/PageElements/GamesSection';
import PageModal from '../Components/PageElements/PageModal';
import ResumeSection from '../Components/PageElements/ResumeSection';
import EducationSection from '../Components/PageElements/EducationSection';


export default function Home() {
    const [currentOpenModal, setCurrentOpenModal] = React.useState(null);

    const closeModalCallback = React.useCallback(() => {
        setCurrentOpenModal(null);
    }, [setCurrentOpenModal])

    return <div >
        <PageModal open={currentOpenModal !== null} currentPage={currentOpenModal} onClose={closeModalCallback} />
        <Blurb />
        <Spacer />
        <ResumeSection />
        <Spacer />
        <WebSection openModal={setCurrentOpenModal} />
        <Spacer />
        <GamesSection openModal={setCurrentOpenModal} />
        <Spacer />
        <EducationSection />
    </div>
}