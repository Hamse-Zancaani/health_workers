import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/production/operator.png';
import imgTwo from '../../assets/production/truck.png';
import imgThree from '../../assets/production/package.png';


const Team = () => {

    const teams = [
        {
            'img': imgThree,
            'name': 'Pakke- og lagerarbejdere',
            // 'title': 'Direktør' // <--- Added Title
        },
        {
            'img': imgTwo,
            'name': 'Truckførere',
            // 'title': 'Vagtkoordinator' // <--- Added Title
        },
        {
            'img': imgOne,
            'name': 'Operatører og maskinpassere',
            // 'title': 'HR ansvarlig' // <--- Added Title
        },
        
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="vores professionelle"
                            title=" Vi har produktionsmedarbejdere"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'></p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map((team, index) => 
                            <div className="col-lg-3 col-sm-6" key={index}> {/* Added key for map loop */}
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt={`Profile of ${team.name}`} /> {/* <--- Updated alt attribute */}
                                    </div>
                                    <h3>{team.name}</h3>
                                    <p className="team-title">{team.title}</p> {/* <--- Added Title display */}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;