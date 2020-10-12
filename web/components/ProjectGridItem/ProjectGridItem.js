import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-graceful-image';
import classnames from 'classnames';
import styles from './ProjectGridItem.module.scss';
import { urlFor } from '../../utils';

const ProjectGridItem = ({ project }) => {
  const { images } = project;
  return (
    <div className={classnames(styles['project-grid-item'], images.length > 1 && 'project-grid-item--multiple-images')}>
      {images.map((image) => (
        <ProgressiveImage
          key={image._key}
          placeholder="/placeholder-img.png"
          src={urlFor(image).width(300).auto('format').url()}
          rootMargin="0% 0% 0%"
          threshold={[1]}
        >
          {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={project.title} />}
        </ProgressiveImage>
      ))}
    </div>
  );
};

ProjectGridItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
  }).isRequired
}

export default ProjectGridItem;
