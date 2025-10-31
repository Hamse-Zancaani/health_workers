import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About_services.scss';
import ServicesData from './About_serviceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Vores værdier" subTitle=""/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>De principper der styrer alt hvad vi gør.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

         
        </section>
    );
};

export default Services;