import React from 'react';
import './Temporary_Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import iconOne from '../../assets/features/nn.png';
import iconTwo from '../../assets/features/group.png';
import iconThree from '../../assets/features/2.png';


const Features = () => {
    return (
        <section
            className="section-bg section-common features-section pt-100 pb-70"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="container">
                <SectionTitle
                    subTitle=""
                    title="Huskelisten til Vikaren"
                    description="Alt hvad du behøver at vide for at være en succesfuld vikar."
                />

                <div className="row align-items-stretch g-4">

                    {/* Før din vagt */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-list-box text-center p-4 h-100">
                            <img src={iconOne} alt="Før din vagt" className="feature-icon mb-3" />
                            <h4 className="feature-title mb-3">Før din vagt</h4>
                            {/* <p className="feature-desc">Forberedelse før du tager på vagt:</p> */}

                            <ul className="feature-checklist">
                                <li>
                                    <BsFillCheckCircleFill />
                                    Skriv dig op til vagt på: <a href="mailto:vikar@vikarin.dk">vikar@vikarin.dk</a>
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    <a href="https://vikarbooking.cas.dk/#/login" target="_blank" rel="noopener noreferrer">
                                        https://vikarbooking.cas.dk/#/login
                                    </a>
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Hav din telefon på dig og slå lyden til
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Meld fra i god tid – minimum 4 timer inden vagtstart
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Værdier */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-list-box text-center p-4 h-100">
                            <img src={iconTwo} alt="Værdier" className="feature-icon mb-3" />
                            <h4 className="feature-title mb-3">På selve vagten</h4>
                            {/* <p className="feature-desc">
                                Vores virksomhed bygger på tillid, og vores viljestyrke er at vi gør alt for at opfylde vores kunders forventninger.
                            </p> */}
                             <ul className="feature-checklist">
                                <li>
                                    <BsFillCheckCircleFill />
                                   Mød altid ind til tiden

                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                   Yd altid dit bedste
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                   Vær opsøgende og spørg dine kollegaer om de har brug for hjælp
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Undlad at bruge din mobiltelefon til private samtaler, sms’er eller musik
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Omfattende service */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-list-box text-center p-4 h-100">
                            <img src={iconThree} alt="Omfattende service" className="feature-icon mb-3" />
                            <h4 className="feature-title mb-3">Efter din vagt:</h4>
                            {/* <p className="feature-desc">
                                Vi tilbyder skræddersyede løsninger, der passer til jeres specifikke behov inden for sundhedsvikarbemanding.
                            </p> */}
                             <ul className="feature-checklist">
                                <li>
                                    <BsFillCheckCircleFill />
                                   Godkend den digitale timeseddel på din app CAS vikar booking 
                                </li>
                                
                                <li>
                                    <BsFillCheckCircleFill />
                                    Sørg for at indberette, hvis vagten er kortere eller længere end bestilt, da vi fakturerer efter bestillingerne
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                  
                 

                </div>
            </div>
        </section>
    );
};

export default Features;
