import React, { useEffect } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { projects } from '../../data/Portfolio';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import aboutBg from "../../../img/about_bg.jpg";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories from projects
  const categories = [
    'all', // For showing all projects
    ...new Set(Object.values(projects).map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? Object.values(projects)
    : Object.values(projects).filter((project) => project.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 bg-[#121212]">
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#121212] bg-opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-12 mx-auto text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            ConvergeSol Overview
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-lg lg:text-xl">
            <Link to="/" className="font-medium">Home</Link> /
            <Link to="/portfolio"> Protfolio</Link>
          </p>
        </div>
      </div>

      <div id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Portfolio</h2>
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl">
              Discover our successful projects and innovative solutions
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${selectedCategory === category ? 'bg-indigo-600' : 'bg-[#202020] hover:bg-indigo-600'}`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#202020] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
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
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#4A96FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-white">
                    {project.project.description.split(" ").slice(0, 15).join(" ")}{
                      project.project.description.split(" ").length > 15 ? "..." : "" 
                    }
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
                      to={`/portfolio/${project.title.toLowerCase().replace(/ /g, '-')}`} 
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
        </div>
      </div>
    </div>
  );
}
