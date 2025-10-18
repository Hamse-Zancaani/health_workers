import React from 'react';
import './Service.scss';

const Service = ({ serviceList }) => {
    const { title, description, icon } = serviceList;

    return (
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200">
            <div className="service-box">
                <div className="icon-area">
                    <div className="icon-box">
                        <img src={icon} alt={title} />
                    </div>
                </div>
                <div className="service-text">
                    <h3><a href="#">{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
