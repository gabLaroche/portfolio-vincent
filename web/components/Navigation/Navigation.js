import React, { useState } from 'react';
import client from "../../client";
import './Navigation.scss';
import Link from 'next/link';

const Navigation = ({socialMediaLinks}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <div className="menu__control">
                <input type="checkbox" id="menuIconCheck" onChange={() => setIsMenuOpened(!isMenuOpened)}/>
                <label className="menu-icon" htmlFor="menuIconCheck">
                    <span className="menu-icon__bar"></span>
                    <span className="menu-icon__bar"></span>
                    <span className="menu-icon__bar"></span>
                </label>
                <a className={'menu__logo-link'} href={'/'}><img alt={'logo'} src={'/logo.png'} /></a>
                <ul className={'social-media__list'}>
                    { socialMediaLinks.map(socialMediaLink => (
                        <li className={'social-media__list-item'} key={socialMediaLink._id}>
                            <a
                                className={'social-media__link'}
                                href={socialMediaLink.link}
                                title={socialMediaLink.title}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <i className={socialMediaLink.iconName}></i>
                            </a>
                        </li>
                    ))

                    }
                </ul>
            </div>
            <nav className={`menu ${isMenuOpened ? 'menu--open' : ''}`}>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <Link href={'/category/graphisme#c'}>
                            <a>Graphisme</a>
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <Link href={'/category/photographie#c'}>
                            <a>Photographie</a>
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <Link href={'/affiliate'}>
                            <a>Produits amazon affilié</a>
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <a href="mailto:vincent_blouin@outlook.com">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;
