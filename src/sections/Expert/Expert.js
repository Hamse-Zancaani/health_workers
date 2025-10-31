import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import expertImg from '../../assets/expert.jpg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center flex-lg-row flex-column-reverse">
                    {/* Image on the left */}
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>

                    {/* Text and buttons on the right */}
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="Ekspert Vikarservice"
                                title="Har du brug for vikarer?"
                                description="Kontakt os i dag og få professionelle vikarer til jeres afdeling. Vi er klar til at hjælpe døgnet rundt."
                            />

                            <div className="expert-buttons">
                                <button className="btn-primary">Ring nu: 25 72 72 49</button>
                                <button className="btn-outline">Send os en besked</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;
