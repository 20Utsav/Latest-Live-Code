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
    <div className="group h-auto w-full flex flex-col p-8 rounded-2xl bg-white text-black shadow-md border transform transition-all duration-500 hover:border-transparent hover:bg-[#112347] hover:text-gray-400">
      <div className="flex items-center justify-center mb-6">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-16 w-16 object-contain transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>

      <ul className="flex-1 text-center list-disc pl-5">
        {details.map((detail, index) => (
          <li key={index} className="mb-2">{detail}</li>
        ))}
      </ul>

      {/* Use Link for navigation */}
      <Link to={path} className="font-medium flex items-center justify-center space-x-2 mt-4">
        <span>Learn More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServicesCard;
