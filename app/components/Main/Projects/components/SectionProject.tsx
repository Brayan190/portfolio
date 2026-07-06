import React from 'react'
import { Projects } from '../../data/models'
import ProjectCard from './ProjectCard'

const SectionProject = ({projects}:{projects:Projects[]}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, image, title, build_with, description, url }: Projects) => (
            <ProjectCard key={id} id={id} image={image} title={title} build_with={build_with} description={description} url={url} />
          ))}
        </div>
        )
}

export default SectionProject
