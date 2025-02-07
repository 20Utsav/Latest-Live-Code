// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { services } from '../../data/servicesData';

// const ServiceDetail = () => {
//   const { serviceKey } = useParams<{ serviceKey: string }>();

//   if (!serviceKey) {
//     return <div className="text-center text-red-500 text-lg">Invalid Service</div>;
//   }

//   const service = services[serviceKey];

//   if (!service) {
//     return <div className="text-center text-red-500 text-lg">Service not found</div>;
//   }

//   useEffect(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="h-[80px] flex-shrink-0"></div>
//       <div className="flex-grow px-6 py-8 sm:px-12 md:px-16 lg:px-24">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
//           {service.title}
//         </h2>
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//           <img
//             src={service.imageSrc}
//             alt={service.title}
//             className="w-full max-w-xs sm:max-w-sm md:w-1/3 object-contain rounded-lg shadow-lg"
//           />
//           <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
//             {service.description}
//           </p>
//         </div>

//         <ul className="list-disc pl-5 mt-6 space-y-2 text-sm sm:text-base md:text-lg">
//           {service.details.map((detail: string, index: number) => (
//             <li key={index} className="text-gray-600">{detail}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../data/servicesData";

const ServiceDetail = () => {
  const { serviceKey } = useParams<{ serviceKey: string }>();

  if (!serviceKey) {
    return <div className="text-center text-red-500 text-lg">Invalid Service</div>;
  }

  const service = services[serviceKey];

  if (!service) {
    return <div className="text-center text-red-500 text-lg">Service not found</div>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("AutoPlay failed:", error));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[80px] flex-shrink-0"></div>
      <div className="flex-grow px-6 py-8 sm:px-12 md:px-16 lg:px-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          {service.title}
        </h2>

        {service.videoSrc ? (
          <div className="flex justify-center items-center">
            <video
              ref={videoRef}
              src={service.videoSrc}
              autoPlay
              loop
              muted
              className="w-full md:w-[70%] h-auto rounded-lg shadow-lg"
              controls={false} 
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src={service.imageSrc}
              alt={service.altText}
              className="w-full max-w-xs sm:max-w-sm md:w-1/3 object-contain rounded-lg shadow-lg"
            />
          </div>
        )}

        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-6 text-center">
          {service.description}
        </p>

        <ul className="list-disc pl-5 mt-6 space-y-2 text-sm sm:text-base md:text-lg text-center">
          {service.details.map((detail: string, index: number) => (
            <li key={index} className="text-gray-600">{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
