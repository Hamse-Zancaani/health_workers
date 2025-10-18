import React from 'react';
import './Symptoms.scss';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import iconOne from '../../assets/symptoms/2.png';
import iconTwo from '../../assets/symptoms/33.png';
import iconThree from '../../assets/symptoms/55.png';
import iconFour from '../../assets/symptoms/66.png';
import iconFive from '../../assets/symptoms/5.png';

const Symptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Udarbejdelse af en tidsplan',
            'description':'Vi laver en detaljeret plan for rekrutteringsprocessen' 
        },
        {
            'icon' : iconTwo,
            'title' : 'Udarbejdelse af et stillingsopslag',
            'description':'Professionelt stillingsopslag der tiltrækker de rette kandidater' 
        },
        {
            'icon' : iconThree,
            'title' : 'Interview og udvælgelse',
            'description':'Grundige interviews for at finde de bedste match' 
        },
        {
            'icon' : iconFour,
            'title' : 'Jobsamtaler og indhentning af referencer',
            'description':'Professionelle samtaler og grundig reference-check.' 
        },
        {
            'icon' : iconFive,
            'title' :' Præsentation af de egnede kandidater',
            'description':'Vi præsenterer kun de mest kvalificerede kandidater for jer.' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Rekrutteringsproces"
                    title="Vores rekrutteringsproces"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;