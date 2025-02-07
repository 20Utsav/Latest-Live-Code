import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ServicesCard from '../Services/ServiceCard';
import { services } from '../../data/servicesData';

const Services = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='py-8 bg-[#121212]'>
      <section className="py-20 px-4 md:px-8 lg:px-16 text-[#D0DFEA]">
        <h2 className="text-center text-4xl font-extrabold mb-6">
          Our Services
        </h2>
        <p className="text-center text-lg mb-12">
          Fostering a playful & engaging learning environment
        </p>

        {/* Swiper Slider */}
        <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={1} // Default: 1 card on all screens
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1, // 1 card on screens below 640px
    },
    768: {
      slidesPerView: 2, // 2 cards on medium screens (>= 768px)
    },
    1024: {
      slidesPerView: 4, // 3 cards on large screens (>= 1024px)
    },
  }}
  className="w-full"
>
  {Object.values(services).map((service) => (
    <SwiperSlide key={service.id}>
      <ServicesCard
        title={service.title}
        icon={service.imageSrc} // Changed from service.icon to service.imageSrc
        details={service.details}
        path={service.altText} // Changed from service.path to service.altText
      />
    </SwiperSlide>
  ))}
</Swiper>
      </section>
    </div>
  );
};

export default Services;
