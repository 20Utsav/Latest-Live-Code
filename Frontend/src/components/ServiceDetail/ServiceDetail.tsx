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
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500 bg-gray-100 px-4 py-2 rounded-lg shadow-md">
          Invalid Service
        </p>
      </div>
    );
  }

  const service = services[serviceKey];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500 bg-gray-100 px-4 py-2 rounded-lg shadow-md">
          Service Not Found
        </p>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) =>
        console.error("AutoPlay failed:", error)
      );
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0e0e0e] text-white">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#1c1c1c] to-[#0e0e0e]"></div>

      {/* Floating Neon Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="h-[80px] flex-shrink-0"></div>

      <div className="relative flex-grow px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Animated Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg animate-slide-in">
          {service.title}
        </h2>

        {/* Neon Video Frame */}
        {service.videoSrc ? (
          <div className="flex justify-center items-center animate-fade-in">
            <div className="relative w-full md:w-[70%] h-auto rounded-3xl overflow-hidden shadow-xl border border-gray-700 bg-gray-900/40 p-3 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
              <video
                ref={videoRef}
                src={service.videoSrc}
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-blue-500/50"
                controls={false}
              />
            </div>
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

        {/* Service Description with Glow */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mt-6 text-center max-w-3xl mx-auto bg-gray-800/50 p-4 rounded-lg shadow-lg border-l-4 border-blue-500/50 animate-fade-in">
          {service.description}
        </p>

        {/* Neon Glassmorphic Table */}
        <div className="flex justify-center mt-8 pb-10 animate-fade-in">
          <div className="overflow-hidden w-full md:w-2/3 bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 p-4">
            <table className="w-full text-left text-white">
              <thead>
                <tr className="bg-blue-500/40">
                  <th className="px-6 py-3 border-b border-gray-600">Feature</th>
                  <th className="px-6 py-3 border-b border-gray-600">Description</th>
                </tr>
              </thead>
              <tbody>
                {service.details.map((detail: string, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800/40 transition-colors border-b border-gray-600"
                  >
                    <td className="px-6 py-4">🔹 Feature {index + 1}</td>
                    <td className="px-6 py-4">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
