import React from 'react';
// import MasonryLayout from 'react-masonry-layout'
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import ProjectGridItem from "../ProjectGridItem/ProjectGridItem";
import './ProjectGrid.scss';

const ProjectGrid = ({projects}) => {

    return (
        <>
        {/*<section className={'project-grid'} id={'projects'}>
            {projects.map(project => {
                return (
                    <ProjectGridItem project={project} key={project._id} />
                )
            })}
        </section>*/}
            <MasonryLayout columns={4} gap={10}>
                {projects.map(project => {
                    return (
                        <ProjectGridItem project={project} key={project._id} />
                    )
                })}
            </MasonryLayout>
        </>
    )
};

export default ProjectGrid;
