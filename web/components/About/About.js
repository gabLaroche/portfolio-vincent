import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import './About.scss';
import ProgressiveImage from "react-progressive-graceful-image";
import {urlFor} from "../../utils";

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
                <img src={urlFor(content.image).width(600).auto('format').url()} alt={content.title} />
            </div>
            <div className={'about__container'}>
                <BlockContent blocks={content.content} />
            </div>
        </section>
    )
};

export default About;
