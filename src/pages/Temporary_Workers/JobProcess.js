import React from 'react';
import './JobProcess.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/69.jpg';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";



const JobProcess = () => {
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">

                           
                            
 <div className="expert-text">
                            <SectionTitle 
                                subTitle="Bliv Vikar hos Vikar-Ind!"
                                title="Vil du gerne arbejde som vikar?"
                                description="Vikar-Ind tilbyder et job til dig, som læser på en sundhedsfaglig uddannelse, og som gerne vil have et fleksibelt men lærerigt og givende studiejob. Vi ser, at vores vikarer kan identificere sig med nedenstående værdier"
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                             Ansvarlighed Du skal udvise ansvar
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                  Fleksibilitet– du skal være omstillingsparat, når det er nødvendigt
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                   Kompetence– du skal vægte din faglighed og professionalisme
                                </li>
                            </ul>
                        </div>
                            <div className="theme-btn">
                                <Link to='/'>Get in Touch </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobProcess;