import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className='service-section pt-100 pb-70'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6" data-aos="fade-up">
                        <SectionTitle title="Hvorfor vælge Vikarin?" subTitle="Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                        <p className='service-title-text'>
                            Vi leverer pålidelige og professionelle vikarløsninger tilpasset jeres behov
                        </p>
                    </div>
                </div>

                <div className="row service-cards-row">
                    {ServicesData.map((singleService, index) => (
                        <Service key={index} serviceList={singleService}/>
                    ))}
                </div>
            </div>

            <div className="services-link text-center" data-aos="fade-up" data-aos-delay="400">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;
