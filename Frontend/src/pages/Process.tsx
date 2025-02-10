import React from "react";
import {
  FaRegClipboard,
  FaProjectDiagram,
  FaHandshake,
  FaMoneyBillWave,
  FaBox,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaRegClipboard size={30} />,
    title: "Progressive Roadmap",
    description:
      "Our team of expert developers formulates a progressive roadmap that outlines clear objectives and the key steps to achieve them. By leveraging advanced tools like Jira, Trello, and GitHub, we ensure our roadmaps are updated in real-time, allowing for seamless progress tracking and easy adaptability to any changes along the way.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram size={30} />,
    title: "Efficient Project Management",
    description:
      "We prioritize efficient project management to ensure smooth project execution and timely delivery. By using tools like Wrike and Zoho, our experienced developers carefully plan, organize, and manage every project phase, guaranteeing exceptional outcomes with minimal delays.",
  },
  {
    id: 3,
    icon: <FaHandshake size={30} />,
    title: "Flexible Engagement Model",
    description:
      "Our flexible engagement models are tailored to meet the unique needs of each client. Whether you need developers for short-term or long-term projects, we provide adaptable solutions. If the initial model doesn’t align with your goals, transitioning to another option is both simple and seamless.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave size={30} />,
    title: "Cost-Effective",
    description:
      "Delivering high-quality services at competitive prices is our primary focus. We ensure that businesses of all sizes can access top-tier solutions through cost-effective pricing and flexible hiring models, ensuring you get the best value for your investment.",
  },
  {
    id: 5,
    icon: <FaBox size={30} />,
    title: "Consistent Delivery",
    description:
      "Consistency is at the heart of our process. By embracing an agile methodology, our developers ensure that projects are delivered on time, fully functional, and in line with client expectations. We take pride in our commitment to consistently delivering outstanding results.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#121212] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          <p className="mt-4 text-lg md:text-xl">
            Discover our successful projects and innovative solutions
          </p>
        </div>

        {/* First Row: Steps 1, 2, and 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className="relative p-6 bg-[#202020] text-white border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300">{service.description}</p>
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-[#4A96FF]">
                {`0${index + 1}`}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Steps 4 and 5 (Centered with equal width) */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
            {/* Step 4 */}
            <div className="relative p-6 bg-[#202020] text-white border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="text-white mb-4">{services[3].icon}</div>
              <h3 className="text-lg font-semibold">{services[3].title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300">{services[3].description}</p>
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-[#4A96FF]">
                {`04`}
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative p-6 bg-[#202020] text-white border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="text-white mb-4">{services[4].icon}</div>
              <h3 className="text-lg font-semibold">{services[4].title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300">{services[4].description}</p>
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-[#4A96FF]">
                {`05`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
