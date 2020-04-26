import React from 'react';
import './ProjectGridItem.scss';

const ProjectGridItem = ({project}) => {
    const imageUrls = project.imageUrls;
    return (
        <div className={`project-grid-item ${imageUrls.length > 1 ? 'project-grid-item--multiple-images' : ''}`}>
            {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={project.title} />
            ))}
        </div>
    )
};

export default ProjectGridItem;
