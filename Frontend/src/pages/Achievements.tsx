import React from "react";
import { FaSmile, FaCheckCircle, FaProjectDiagram, FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className=" py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-32 h-32 bg-blue-300 rounded-full -top-16 -left-10 blur-3xl"></div>
        <div className="absolute w-48 h-48 bg-purple-300 rounded-full -bottom-24 -right-16 blur-3xl"></div>
        <div className="absolute w-24 h-24 bg-pink-300 rounded-full top-12 left-20 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold   font-serif tracking-wide">
            Our Achievements
          </h2>
          <p className="mt-4   max-w-3xl mx-auto text-lg">
            With years of hard work and dedication, we've achieved milestones that define our excellence. Let our success inspire your journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaSmile className="text-6xl text-blue-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-black">120K+</h3>
            <p className="mt-2 text-lg text-black">Happy Customers</p>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm">
                Exceptional Service
              </span>
            </div>
          </div>

          {/* Issues Solved */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-black ">1,890+</h3>
            <p className="mt-2   text-lg text-black">Issues Solved</p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-950 py-1 px-3 rounded-full text-sm">
                Proven Expertise
              </span>
            </div>
          </div>

          {/* Finished Projects */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaProjectDiagram className="text-6xl text-purple-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-black  ">250K+</h3>
            <p className="mt-2   text-lg text-black">Finished Projects</p>
            <div className="mt-4">
              <span className="inline-block bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm">
                Innovative Solutions
              </span>
            </div>
          </div>

          {/* Rewards Winning */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <FaTrophy className="text-6xl text-yellow-500 animate-bounce" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-black  ">786+</h3>
            <p className="mt-2   text-lg text-black">Rewards Won</p>
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
