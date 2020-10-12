import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = ({ socialMediaLinks }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.menu__control}>
        <div className={styles['menu__control-container']}>
          <input type="checkbox" id="menuIconCheck" className={styles['menu-icon__check']} onChange={() => setIsMenuOpened(!isMenuOpened)} />
          <label className={styles['menu-icon']} htmlFor="menuIconCheck" aria-label={isMenuOpened ? 'Fermer le menu' : 'Ouvrir le menu'}>
            <span className={styles['menu-icon__bar']} aria-hidden="true" />
            <span className={styles['menu-icon__bar']} aria-hidden="true" />
            <span className={styles['menu-icon__bar']} aria-hidden="true" />
          </label>
          <nav className={classnames(styles.menu, isMenuOpened && styles['menu--open'])}>
            <ul className={styles.menu__list}>
              <li className={styles['menu__list-item']}>
                <Link href="/category/graphisme#c">
                  <a>Graphisme</a>
                </Link>
              </li>
              <li className={styles['menu__list-item']}>
                <Link href="/category/photographie#c">
                  <a>Photographie</a>
                </Link>
              </li>
              <li className={styles['menu__list-item']}>
                <Link href="/affiliate">
                  <a>Produits amazon affilié</a>
                </Link>
              </li>
              <li className={styles['menu__list-item']}>
                <a href="mailto:vincent_blouin@outlook.com">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <a className={styles['menu__logo-link']} href="/"><img alt="logo" src="/logo.png" /></a>
        <ul className={styles['social-media__list']}>
          { socialMediaLinks.map((socialMediaLink) => (
            <li className={styles['social-media__list-item']} key={socialMediaLink._id}>
              <a
                className={styles['social-media__link']}
                href={socialMediaLink.link}
                title={socialMediaLink.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={socialMediaLink.iconName} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Navigation.propTypes = {
  socialMediaLinks: PropTypes.array.isRequired,
}

export default Navigation;
