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
      "Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive roadmap tools like Jira, Trello, and GitHub to update the roadmap within minutes.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram size={30} />,
    title: "Efficient Project Management",
    description:
      "We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently to plan a project and deliver it on time.",
  },
  {
    id: 3,
    icon: <FaHandshake size={30} />,
    title: "Flexible Engagement Model",
    description:
      "We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave size={30} />,
    title: "Cost-Effective",
    description:
      "Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring models.",
  },
  {
    id: 5,
    icon: <FaBox size={30} />,
    title: "Consistent Delivery",
    description:
      "Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.",
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
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-600">
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
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-600">
                {`04`}
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative p-6 bg-[#202020] text-white border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="text-white mb-4">{services[4].icon}</div>
              <h3 className="text-lg font-semibold">{services[4].title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300">{services[4].description}</p>
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-600">
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
