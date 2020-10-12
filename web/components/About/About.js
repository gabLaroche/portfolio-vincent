import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';
import { urlFor } from '../../utils';

const About = ({ content }) => (
  <section id="about" className={styles.about}>
    <div className={styles.about__container}>
      <img src={urlFor(content.image).width(600).auto('format').url()} alt={content.title} />
    </div>
    <div className={styles.about__container}>
      <BlockContent blocks={content.content} />
    </div>
  </section>
);

About.propTypes = {
  content: PropTypes.object.isRequired,
};

export default About;
