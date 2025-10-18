import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import imgOne from '../../assets/servicePage/gallery/1.jpg';
import imgTwo from '../../assets/servicePage/gallery/2.jpg';
import imgThree from '../../assets/servicePage/gallery/44.jpg';
import imgFour from '../../assets/servicePage/gallery/expert.jpg';
import imgFive from '../../assets/servicePage/gallery/88.jpg';
import imgSix from '../../assets/servicePage/gallery/3.jpg';

const Gallery = () => {
    const galleryItems = [
        { img: imgOne, title: 'Quality Maintenance', text: 'Our team ensures every service meets top safety standards.' },
        { img: imgTwo, title: 'Certified Experts', text: 'Each task handled by skilled and experienced professionals.' },
        { img: imgThree, title: 'Modern Equipment', text: 'We use advanced tools for efficiency and precision.' },
        { img: imgFour, title: 'Reliable Service', text: 'Delivering consistent results trusted by our clients.' },
        { img: imgFive, title: 'Client Satisfaction', text: 'We focus on building long-term customer relationships.' },
        { img: imgSix, title: '24/7 Availability', text: 'Always ready to assist whenever you need us most.' },
    ];

    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="Gallery"
                    title="Some proof about our services for you"
                    description="A glimpse into our professional service work — where dedication meets quality and customer satisfaction."
                />

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="gallery-slider"
                >
                    {galleryItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-slide">
                                <img src={item.img} alt={item.title} />
                                <div className="gallery-overlay">
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
