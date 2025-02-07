import React from "react";
import { FaSmile, FaCheckCircle, FaProjectDiagram, FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className=" py-20 relative overflow-hidden bg-[#121212]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl font-extrabold   font-serif tracking-wide">
            Our Achievements
          </h2>
          <p className="mt-4   max-w-3xl mx-auto text-lg">
            With years of hard work and dedication, we've achieved milestones that define our excellence. Let our success inspire your journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Happy Customers */}
          <div className="bg-[#202020] p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaSmile className="text-6xl text-blue-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold ">120K+</h3>
            <p className="mt-2 text-lg">Happy Customers</p>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm">
                Exceptional Service
              </span>
            </div>
          </div>

          {/* Issues Solved */}
          <div className="bg-[#202020] p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-white ">1,890+</h3>
            <p className="mt-2   text-lg text-white">Issues Solved</p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-950 py-1 px-3 rounded-full text-sm">
                Proven Expertise
              </span>
            </div>
          </div>

          {/* Finished Projects */}
          <div className="bg-[#202020] p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaProjectDiagram className="text-6xl text-purple-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-white  ">250K+</h3>
            <p className="mt-2   text-lg text-white">Finished Projects</p>
            <div className="mt-4">
              <span className="inline-block bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm">
                Innovative Solutions
              </span>
            </div>
          </div>

          {/* Rewards Winning */}
          <div className="bg-[#202020] p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaTrophy className="text-6xl text-yellow-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-white  ">786+</h3>
            <p className="mt-2   text-lg text-white">Rewards Won</p>
            <div className="mt-4">
              <span className="inline-block bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm">
                Industry Recognition
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
