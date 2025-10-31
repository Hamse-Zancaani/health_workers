import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import WorkersBanner from './Temporary_Workers/WorkersBanner';
import JobProcess from './Temporary_Workers/JobProcess';
import Appointment from '../sections/Appointment/Appointment';
import Features  from './Temporary_Workers/Temporary_Features';
import Download from './Temporary_Workers/Download';


const Workers = () => {
    return (
        <>
            <Navbar />
            <WorkersBanner />
            < JobProcess/>
            <Features />
            {/* <Gallery /> */}
            <Download />

            <Appointment />
            <Footer />
        </>
    );
};

export default Workers;