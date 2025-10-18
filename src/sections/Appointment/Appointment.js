import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {
    // ✅ Updated embed link for Åsumvej 141, 5240 Odense NØ
    const mapLink =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.7504743173315!2d10.449900776927992!3d55.39885097400408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdf71398b9c73%3A0x367b4c613d6bde6f!2s%C3%85sumvej%20141%2C%205240%20Odense%20N%C3%98!5e0!3m2!1sen!2sdk!4v1714580223456!5m2!1sen!2sdk';

    return (
        <section className="appointment-section pb-70" data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Google Map */}
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <div className="map-container">
                                <iframe
                                    title="map"
                                    src={mapLink}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Åsumvej 141, 5240 Odense NØ</p>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle
                                subTitle="Get In Touch"
                                title="vikarIN "
                                description="Book en tid med os for at diskutere dine vikarbehov og finde de bedste løsninger til din organisation."
                            />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
