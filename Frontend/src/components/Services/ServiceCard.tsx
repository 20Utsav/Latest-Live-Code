import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface ServicesCardProps {
  title: string;
  icon: string;
  details: string[];
  path: string; // Add a path prop to define where the card will navigate
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  icon,
  details,
  path,
}) => {
  return (
    <div className="card-wrapper group w-full flex flex-col p-8 rounded-2xl h-[450px] bg-[#121212] text-[#FFFFFF]
    shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A96FF]">

      <div className="card-content group w-full flex flex-col items-center justify-center text-center bg-slate-200 h-full py-14 rounded-2xl transition-all duration-500">

        {/* Image */}
        <div className="kanti flex items-center justify-center mb-4">
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mx-2 mb-4">{title}</h3>

        {/* List of details */}
        <ul className="flex-1 space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>

        {/* Learn More Button */}
        <Link to={`/services/${path}`} className="font-medium flex items-center justify-center space-x-2 mt-4">
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

      </div>
    </div>

  );
};

export default ServicesCard;
