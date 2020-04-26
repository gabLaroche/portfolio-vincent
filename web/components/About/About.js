import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import './About.scss';
import ProgressiveImage from "react-progressive-graceful-image";

const About = ({content}) => {

    const serializers = {
        types: {
            code: props => (
                <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
            )
        }
    };

    return (
        <section id={'about'} className={'about'}>
            <div className={'about__container'}>
                <ProgressiveImage
                    placeholder={'/placeholder-img-big.png'}
                    src={content.imageUrl}
                    rootMargin="0% 0% 0%"
                    threshold={[1]}>
                    {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={content.title} />}
                </ProgressiveImage>
            </div>
            <div className={'about__container'}>
                <BlockContent blocks={content.content} />
            </div>
        </section>
    )
};

export default About;
