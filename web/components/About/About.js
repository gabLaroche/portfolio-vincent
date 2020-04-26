import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import './About.scss';

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
                <img src={content.imageUrl} alt={content.title}/>
            </div>
            <div className={'about__container'}>
                <BlockContent blocks={content.content} />
            </div>
        </section>
    )
};

export default About;
