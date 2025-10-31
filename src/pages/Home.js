import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../pages/Temporary_Workers/Temporary_Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import Gallery from '../sections/Gallery/Gallery';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
             <Emergency/>
           
             <Gallery/>
              {/* <Features /> */}
           
            
          <Expert/>
            <Testimonial/>
            {/* <Blogs/> */}
          
            {/* <Appointment/> */}
            <Footer/>
        </>
    );
};

export default Home;