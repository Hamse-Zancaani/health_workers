import React from 'react';
import { Link } from 'react-router-dom';
import './about_Production.scss';
import bannerOne from '../../assets/about/44.jpg'
import bannerTwo from '../../assets/about/banner/banner_2.png'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Produktionssektor</h2>
                                    <p>Hos Vikar-ind tilbyder vi pålidelige og erfarne produktionsvikarer til virksomheder i hele landet.
Vi forstår, at effektivitet og fleksibilitet er afgørende i produktionsmiljøer – derfor leverer vi hurtige og stabile bemandingsløsninger, der sikrer kontinuitet og kvalitet i din drift.
.</p>

                                    <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    {/* <img src={bannerTwo} alt="about banner two"/> */}
                                    <img className='pattern' src={pattern} alt="about banner two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;