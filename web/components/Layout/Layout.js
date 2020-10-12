import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

const Layout = ({
  title, children, className, socialMediaLinks,
}) => (
  <>
    {title
            && (
            <Head>
              <title>{title}</title>
            </Head>
            )}
    <div className={`body ${className || ''}`}>
      <Navigation socialMediaLinks={socialMediaLinks} />
      <div className="container">
        {children}
      </div>
      <footer>
        <p>
          <small>
            &copy;
            {new Date().getFullYear()}
            {' '}
            Vincent Blouin. Tous droits réservé
          </small>
        </p>
        <p>
          <small>
            Développé par
            <a href="https://gabriellaroche.dev">Gabriel Laroche</a>
          </small>
        </p>
      </footer>
    </div>
  </>
);

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  socialMediaLinks: PropTypes.array.isRequired,
};

export default Layout;
