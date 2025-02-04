import React, { useState, useEffect } from "react";
import { FaCode, FaMobileAlt, FaCubes, FaPaintBrush } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import EmailForm from "../pages/EmailForm";
import ITSolutionSection from "../pages/ITSolutionSection";

function About() {
  const images = [
    "/img/Utsav.JPG",
    "/img/image2.jpg",
    "/img/image3.jpg",
    "/img/image4.jpg",
    "/img/image5.jpg",
  ];
  const [mapEmail, setMapEmail] = useState("");

  const handleMapEmailSubmit = (e) => {
    e.preventDefault();
    if (mapEmail.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Submitted Email:", mapEmail);
    setMapEmail("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" py-8">
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: "url('/img/about_bg.jpg')",
          backgroundSize: "100% 100%", // Forces image to fit exactly
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-12">
          <h1 className="text-4xl font-bold">ConvergeSol Overview</h1>
          <p className="mt-2 text-lg">
            <span className="font-medium">Home</span> / About
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">

          </div>

          {/* Content Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Text Section */}
            <div className=" ">
              <h2 className="text-4xl font-bold   mb-4">About Us</h2>
              <p className="text-2xl font-bold   mb-4">
                Weekend UX is a UI/UX Design Academy.
              </p>
              <p className="mt-4">
                Humanoid is gushing towards competence to acquire knowledge and have a wide
                understanding of the sphere through the foremost courses in the area of UI/UX Design,
                strengthening your skills for your golden future.
              </p>
              <p className="mt-4">
                Humanoid is gushing towards competence to acquire knowledge and have a wide
                understanding of the sphere through the foremostfuture.
              </p>
              <p className="mt-4">
                Humanoid is gushing towards competence to acquire knowledge and have a wide
                understanding of the sphere through the foremost courses in the area of UI/UX Design,
                strengthening your skills for your golden future.
              </p>

              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md text-lg">
                Join Us
              </button>
            </div>

            {/* Right Image Section */}
            <div className="grid grid-cols-2 gap-2">
              <div className="h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/img/about/1.jpg')` }}></div>
              <div className="h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/img/about/2.jpg')` }}></div>
              <div className="h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/img/about/3.jpg')` }}></div>
              <div className="h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/img/about/4.webp')` }}></div>
            </div>
          </div>
        </div>
      </section>


      <ITSolutionSection />

      {/* Mission Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left">
          <div className="mb-4">
            <p className="text-orange-500 uppercase font-bold text-sm tracking-widest animate-fadeInUp">
              Helping Businesses Grow Digitally
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold   mt-2 animate-fadeInUp delay-100">
              Our Vision
            </h1>
          </div>
          <p className="  text-base animate-fadeInUp delay-200">
            Our vision is to be a trusted partner for businesses, delivering innovative IT solutions while building lasting relationships. We aim to simplify technology, tailoring services like web development, app development, digital marketing, Shopify development, and custom software to meet each client’s unique needs Our vision is to be a trusted partner for businesses, delivering innovative IT solutions while building lasting relationships. We aim to simplify technology, tailoring services like web development .
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 animate-fadeInUp delay-300">
          <img
            src="/img/about/6.webp"
            alt="Team Collaboration"
            className="rounded-md shadow-md w-full mx-auto"
          />
        </div>
      </div>


      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/img/about/6.webp"
            alt="Team Collaboration"
            className="rounded-md shadow-md w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="mb-4">
            <p className="text-orange-500 uppercase font-bold text-sm tracking-widest">
              Helping Businesses Grow Digitally
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold   mt-2">
              Our Mission
            </h1>
          </div>
          <p className="  text-base animate-fadeInUp delay-200">
            Our vision is to be a trusted partner for businesses, delivering innovative IT solutions while building lasting relationships. We aim to simplify technology, tailoring services like web development, app development, digital marketing, Shopify development, and custom software to meet each client’s unique needs Our vision is to be a trusted partner for businesses, delivering innovative IT solutions while building lasting relationships. We aim to simplify technology, tailoring services like web development .
          </p>
        </div>
      </div>

      {/*Team Member */}
      <section className="w-full py-20">
        <h2 className="text-4xl font-extrabold text-center   mb-12">
          Meet Our <span className="text-orange-500">Team</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Individual team members */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="/img/Utsav.JPG"
                alt="Uday Kyada"
                className="w-full object-cover h-[350px]"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold  ">Sujan Butani</h3>
                <p className="text-gray-500 text-sm mt-1">Chief Executive Officer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="/img/Utsav.JPG"
                alt="Utsav Vasoya"
                className="w-full object-cover h-[350px]"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold  ">Utsav Vasoya</h3>
                <p className="text-gray-500 text-sm mt-1">Chief Technology Officer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="/img/Utsav.JPG"
                alt="Nidhi Patel"
                className="w-full object-cover h-[350px]"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold  ">Sagar Sanghani</h3>
                <p className="text-gray-500 text-sm mt-1">Chief Technology Officer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="/img/Utsav.JPG"
                alt="Raj Mehta"
                className="w-full object-cover h-[350px]"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold  ">Yash Ramani</h3>
                <p className="text-gray-500 text-sm mt-1">Chief Technology Officer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="/img/Utsav.JPG"
                alt="Raj Mehta"
                className="w-full object-cover h-[350px]"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold  ">Dharam Pipaliya</h3>
                <p className="text-gray-500 text-sm mt-1">Chief Technology Officer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <EmailForm />
    </div>
  );
}
export default About;