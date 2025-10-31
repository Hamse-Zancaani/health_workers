import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/about/44.jpg';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";
import '../Expert/Expert.scss';


const Emergency = () => {
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
                                subTitle="eksperter i sundhedspersonale"
                                title="Vores specialisering"
                                description="Vi er specialiserede i at levere fleksible og pålidelige løsninger til sundhedssektoren."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                  Fleksible bemandingsløsninger
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Korte og langvarige vikariater
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Faste stillinger til sundhedssektoren i hele landet
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

export default Emergency;