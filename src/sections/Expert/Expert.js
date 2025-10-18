import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.jpg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
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
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;