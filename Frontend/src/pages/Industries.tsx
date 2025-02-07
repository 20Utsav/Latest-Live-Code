import React from "react";
import {
  FaBook,
  FaHeart,
  FaMedkit,
  FaCalendarAlt,
  FaUserMd,
  FaFilm,
  FaUtensils,
  FaDumbbell,
  FaShoppingCart,
  FaTaxi,
  FaFutbol,
  FaPlane,
} from "react-icons/fa";

const Industries = () => {
  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in text-white">
          <h2 className="text-4xl font-extrabold font-serif">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg   max-w-2xl mx-auto">
            Discover the diverse industries where we offer tailored development services for businesses of all sizes, from startups to large enterprises.
          </p>
        </div>

        {/* Industry Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
          {/* Education & Learning */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaBook className="text-4xl text-blue-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Education & Learning
            </h3>
          </div>

          {/* Dating App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaHeart className="text-4xl text-pink-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Dating App
            </h3>
          </div>

          {/* Healthcare & Fitness */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaMedkit className="text-4xl text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Healthcare & Fitness
            </h3>
          </div>

          {/* Events & Tickets */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaCalendarAlt className="text-4xl text-purple-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Events & Tickets
            </h3>
          </div>

          {/* Doctors Appointment App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaUserMd className="text-4xl text-indigo-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Doctors Appointment App
            </h3>
          </div>

          {/* Media & Entertainment App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaFilm className="text-4xl text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Media & Entertainment App
            </h3>
          </div>

          {/* Food & Restaurants App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaUtensils className="text-4xl text-red-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Food & Restaurants App
            </h3>
          </div>

          {/* GYM Management */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaDumbbell className="text-4xl text-orange-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              GYM Management
            </h3>
          </div>

          {/* Grocery App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaShoppingCart className="text-4xl text-teal-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Grocery App
            </h3>
          </div>

          {/* Taxi Booking */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaTaxi className="text-4xl text-cyan-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Taxi Booking
            </h3>
          </div>

          {/* Sports & Fantasy App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaFutbol className="text-4xl text-lime-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Sports & Fantasy App
            </h3>
          </div>

          {/* Travel Booking App */}
          <div className="bg-[#202020] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <FaPlane className="text-4xl text-amber-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold  ">
              Travel Booking App
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;