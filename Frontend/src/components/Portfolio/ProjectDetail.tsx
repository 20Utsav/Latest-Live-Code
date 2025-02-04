// src/components/ProjectDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/Portfolio';

const ProjectDetail = () => {
  const { projectKey } = useParams<{ projectKey: string }>(); // Get the project key from the URL
  const project = Object.values(projects).find(
    (p) => p.title.toLowerCase().replace(/ /g, '-') === projectKey
  );

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail h-64 bg-slate-400 text-black">
      <h1>{project.title}</h1>
      <p>{project.project.description}</p>
      {/* Render more project details here */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus ut quas facere quidem suscipit dolor beatae earum molestiae sunt commodi eaque consequatur quisquam debitis, expedita obcaecati dolore at explicabo totam facilis vero maiores tempore voluptate? Voluptas, debitis omnis commodi temporibus aspernatur numquam maxime delectus molestiae sit magni iste doloribus!</p>
    </div>
  );
};

export default ProjectDetail;
