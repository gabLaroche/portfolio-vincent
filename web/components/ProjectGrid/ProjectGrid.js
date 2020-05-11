import React, {useState, useLayoutEffect} from 'react';
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import ProjectGridItem from "../ProjectGridItem/ProjectGridItem";
import './ProjectGrid.scss';

const ProjectGrid = ({projects}) => {
    const [columns, setColumns] = useState(2);

    useLayoutEffect(() => {
        handleResize();
    },[]);

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 768 && width < 1024) {
            setColumns(3)
        } else if (width >= 1024) {
            setColumns(4)
        } else {
            setColumns(2);
        }
    };

    return (
        <>
            <MasonryLayout className={'project-grid'} columns={columns} gap={10}>
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
