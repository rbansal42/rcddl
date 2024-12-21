// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, status }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <span className={`inline-block px-2 py-1 rounded text-sm mb-2
          ${status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
            status === 'Completed' ? 'bg-green-100 text-green-800' :
            'bg-yellow-100 text-yellow-800'}`}>
          {status}
        </span>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;