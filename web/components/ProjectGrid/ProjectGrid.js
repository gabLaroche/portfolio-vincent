import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIsomorphicLayoutEffect } from '../../utils';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import ProjectGridItem from '../ProjectGridItem/ProjectGridItem';
import styles from './ProjectGrid.module.scss';

const ProjectGrid = ({ projects }) => {
  const [columns, setColumns] = useState(2);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 768 && width < 1024) {
      setColumns(3);
    } else if (width >= 1024) {
      setColumns(4);
    } else {
      setColumns(2);
    }
  };

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <MasonryLayout
        className={styles['project-grid']}
        columns={columns}
        gap={10}
      >
        {projects.map((project) => (
          <ProjectGridItem project={project} key={project._id} />
        ))}
      </MasonryLayout>
    </>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectGrid;
