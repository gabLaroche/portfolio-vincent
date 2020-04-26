import React from 'react';
import './ProjectGrid.scss'
import ProjectGridItem from "../ProjectGridItem/ProjectGridItem";

const ProjectGrid = ({projects}) => {

    return (
        <section className={'project-grid'} id={'projects'}>
            {projects.map(project => {
                return (
                    <ProjectGridItem project={project} key={project._id} />
                )
            })}
        </section>
    )
};

export default ProjectGrid;
