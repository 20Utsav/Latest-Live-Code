import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/Portfolio';

const ProjectDetail = () => {
  const { projectKey } = useParams<{ projectKey: string }>(); // Get project key from the URL
  const project = Object.values(projects).find(
    (p) => p.title.toLowerCase().replace(/ /g, '-') === projectKey
  );

  if (!project) return <div className="text-center text-red-500 text-xl mt-10">Project not found</div>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#121212] py-10 px-4">
      <div className="max-w-4xl mx-auto overflow-hidden p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold border-b pb-4">{project.title}</h1>

        {/* Project Image */}
        <div className="mt-6 rounded overflow-hidden shadow-md">
          <img src={project.imageSrc} alt={project.altText} className="w-full h-80 object-cover" />
        </div>

        {/* Project Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold inline-block border-b-4 border-gray-400 pb-2">
            Introduction
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed">{project.project.description}</p>
        </div>

        {/* Three Images in One Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
  {project.additionalImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Project Image ${index + 1}`}
      className="w-full h-40 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110"
    />
  ))}
</div>


        {/* Back to Portfolio Button */}
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="inline-block px-6 py-3 bg-[#4A96FF] text-white font-semibold rounded-lg hover:bg-[#3578E5] transition">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
