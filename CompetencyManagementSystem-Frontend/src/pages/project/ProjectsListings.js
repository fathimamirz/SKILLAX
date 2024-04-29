import React from 'react';
import AvData from './AvData'; // Importing the AvData array from your file

const ProjectListing = () => {
  // Assigning the AvData array to the projects variable
  const projects = AvData;

  // Filter projects based on status
  const completedProjects = projects.filter(project => project.status === 'completed');
  const pendingProjects = projects.filter(project => project.status === 'pending');
  const allocatedProjects = projects.filter(project => project.status !== 'completed' && project.status !== 'pending');

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-24 py-8 sm:py-6 lg:py-8">
      <h2 className="text-3xl font-bold mb-8 mb-20 text-center">Project List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="text-center bg-green-500 text-white py-2 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Completed Projects</h3>
        </div>
        <div className="text-center bg-yellow-500 text-white py-2 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Allocated Projects</h3>
        </div>
        <div className="text-center bg-red-500 text-white py-2 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Pending Projects</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div>
          {completedProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md mb-4 p-6">
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm font-semibold mb-1">Tech Stack:</p>
              <div className=" text-gray-700 text-xs px-2 py-1 rounded-full">{project.techstack}</div>
            </div>
          ))}
        </div>
        <div>
          {allocatedProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md mb-4 p-6">
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm font-semibold mb-1">Tech Stack:</p>
              <div className=" text-gray-700 text-xs px-2 py-1 rounded-full">{project.techstack}</div>
            </div>
          ))}
        </div>
        <div>
          {pendingProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md mb-4 p-6">
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm font-semibold mb-1">Tech Stack:</p>
              <div className=" text-gray-700 text-xs px-2 py-1 rounded-full">{project.techstack}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
