// src/components/Portfolio.tsx
import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/Portfolio';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  // Convert projects object to an array and get the first 3 projects
  const visibleProjects = Object.values(projects).slice(0, 3);

  return (
    <div id="portfolio" className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold">Our Portfolio</h2>
          <p className="mt-4 text-xl">Discover our successful projects and innovative solutions</p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#202020] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#121212] bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center z-10">
                  <div className="space-x-4">
                    <a
                      href={project.project.demoUrl}
                      className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.project.githubUrl}
                      className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
                <img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#4A96FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#4A96FF] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  {project.project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-[#4A96FF] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    to={`/portfolio/${project.title.toLowerCase().replace(/ /g, '-')}`} // Pass project key as a route parameter
                    className="inline-flex items-center text-white hover:text-[#4A96FF] font-medium"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
  <Link to="/portfolio" className="inline-flex items-center px-6 py-3 bg-[#D0DFEA] text-black font-semibold rounded-lg hover:bg-[#4A96FF] transition-colors">
    Show More 
    <FaArrowRight className="ml-2 h-5 w-5" /> {/* You can adjust the size of the icon if necessary */}
  </Link>
</div>

      </div>
    </div>
  );
};

export default Portfolio;
