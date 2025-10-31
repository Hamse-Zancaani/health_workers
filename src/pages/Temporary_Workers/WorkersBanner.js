import React from 'react';
import { Link } from 'react-router-dom';
import './WorkersBanner.scss';
import serviceBanner from '../../assets/vikar.png';

const WorkersBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Bliv Vikar hos Vikar-Ind!</h2>
                                    <p></p>
                                    <div className="theme-btn">
                                        <Link to="/">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                                    <img src={serviceBanner} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkersBanner;