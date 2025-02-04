// /components/ServiceDetail/ServiceDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/servicesData';

const ServiceDetail = () => {
  const { serviceKey } = useParams<{ serviceKey: string }>(); // Get the serviceKey from the URL

  // If there's no serviceKey, return an error message
  if (!serviceKey) {
    return <div>Invalid Service</div>;
  }

  // Fetch the service details from the services object
  const service = services[serviceKey];

  // If the service doesn't exist, show an error
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail p-8">
      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
      <div className="flex mb-6">
        <img src={service.imageSrc} alt={service.title} className="h-32 w-32 object-contain mr-6" />
        <p className="text-lg">{service.description}</p>
      </div>
      <ul className="list-disc pl-5">
        {service.details.map((detail: string, index: number) => (
          <li key={index} className="mb-2">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;
