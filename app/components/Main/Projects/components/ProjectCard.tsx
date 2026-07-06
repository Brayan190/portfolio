"use client"
import React, { useState } from 'react'
import { Projects } from '../../data/models';

const ProjectCard = ({ id, image, title, build_with, description, url }: Projects) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-contain bg-gray-100 dark:bg-gray-600 mb-4 rounded-md p-4" />
      <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
      <p className={`text-gray-600 dark:text-gray-300 text-sm mb-1 transition-all duration-300 ${expanded ? '' : 'line-clamp-3'}`}>
        {description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-emerald-600 dark:text-emerald-400 text-sm mb-3 hover:underline cursor-pointer"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <h4 className='text-md font-semibold dark:text-gray-200'>Build with</h4>
      <ul className='flex flex-wrap gap-2 mt-2'>
        {build_with.map((tech, index) => (
          <li key={index} className="bg-emerald-500 px-3 py-1 text-white rounded-xl text-center text-sm">{tech}</li>
        ))}
      </ul>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          Ver proyecto →
        </a>
      )}
    </div>
  );
}

export default ProjectCard
