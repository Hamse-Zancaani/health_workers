import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/88.jpg';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="" 
                                title="Vores historie"
                                description="Vikarin blev grundlagt i 2021 af Abdinor A Mohamed som så en bekymrende tendens udfolde sig i sundhedssektoren. Der er i dag stor mangel på personale, og sygeplejerskerne på sygehusene er nødt til at løbe hurtigere.

Med Vikarin håber vi på at kunne hjælpe alle de dygtige sundhedspersonale, som hver dag går på arbejde for at gøre en forskel.

Trods Vikarins unge alder, er vikarbureauet godkendt som 2. leverandør for Odense kommune, da Vikarin har vist at være en troværdig samarbejdspartner både for kunder og ansatte.."
                            />

                            <div className="theme-btn">
                                <Link to='/'>Book an appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;