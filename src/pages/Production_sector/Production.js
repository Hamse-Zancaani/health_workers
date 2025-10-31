import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AboutProduction from '../Production_sector/about_Production';
import Faq from '../../sections/Faq/Faq';
// import Priority from '../sections/Priority/Priority';
// import Safety from '../sections/Safety/Safety';
import Team from '../Production_sector/Team';
import Footer from '../../sections/Footer/Footer';
import Services from '../../pages/Production_services/About_services';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutProduction />
            {/* <Priority /> */}
          
            {/* <Safety /> */}
            <Team />
             <Services/>
            <Faq />
            <Footer />
        </>
    );
};

export default About;