import React from 'react';
import ProgressiveImage from "react-progressive-graceful-image";
import './ProjectGridItem.scss';
import {urlFor} from "../../utils";

const ProjectGridItem = ({project}) => {
    const images = project.images;
    return (
        <div className={`project-grid-item ${images.length > 1 ? 'project-grid-item--multiple-images' : ''}`}>
            {images.map((image) => (
                <ProgressiveImage
                    key={image._key}
                    placeholder={'/placeholder-img.png'}
                    src={urlFor(image).width(300).auto('format').url()}
                    rootMargin="0% 0% 0%"
                    threshold={[1]}>
                    {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />}
                </ProgressiveImage>
            ))}
        </div>
    )
};

export default ProjectGridItem;
