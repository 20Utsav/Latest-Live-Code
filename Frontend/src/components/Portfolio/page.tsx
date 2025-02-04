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

  return (
    <div className="py-8">
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white px-6 md:px-12">
          <h1 className="text-4xl font-bold">ConvergeSol Overview</h1>
          <p className="mt-2 text-lg">
            <span className="font-medium">Home</span> / Portfolio
          </p>
        </div>
      </div>

      <div id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Our Portfolio</h2>
            <p className="mt-4 text-xl">
              Discover our successful projects and innovative solutions
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${selectedCategory === category ? 'bg-indigo-600' : 'bg-gray-600 hover:bg-indigo-600'}`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center z-10">
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
                        <Github className="h-5 w-5 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                  <img
                    src={project.imageSrc}
                    alt={project.altText}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">
                    {project.project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      to={`/portfolio/${project.title.toLowerCase().replace(/ /g, '-')}`} // Pass project key as a route parameter
                      className="inline-flex items-center text-[#112347] hover:text-[#112347] font-medium"
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
