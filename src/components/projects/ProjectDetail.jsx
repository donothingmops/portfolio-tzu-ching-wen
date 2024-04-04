// components/projects/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectDetails } from '../../constants'; // Ensure correct path

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails.find(proj => proj.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`Project Image ${index + 1}`} className="rounded-lg shadow-lg max-w-full h-auto" />
        ))}
      </div>
      {/* You can add more project details here */}
    </div>
  );
};

export default ProjectDetail;
