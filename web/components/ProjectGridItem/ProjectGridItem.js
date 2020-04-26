import React from 'react';
import ProgressiveImage from "react-progressive-graceful-image";
import './ProjectGridItem.scss';

const ProjectGridItem = ({project}) => {
    const imageUrls = project.imageUrls;
    return (
        <div className={`project-grid-item ${imageUrls.length > 1 ? 'project-grid-item--multiple-images' : ''}`}>
            {imageUrls.map((imageUrl, index) => (
                <ProgressiveImage
                    key={index}
                    placeholder={'/placeholder-img.png'}
                    src={imageUrl}
                    rootMargin="0% 0% 0%"
                    threshold={[1]}>
                    {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />}
                </ProgressiveImage>
            ))}
        </div>
    )
};

export default ProjectGridItem;
