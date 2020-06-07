import React, {useState} from 'react';
import './Navigation.scss';

const Navigation = (props) => {
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
            </div>
            <nav className={`menu ${isMenuOpened ? 'menu--open' : ''}`}>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a href={'/category/graphisme#c'}>Graphisme</a>
                    </li>
                    <li className="menu__list-item">
                        <a href={'/category/photographie#c'}>Photographie</a>
                    </li>
                    <li className="menu__list-item">
                        <a href={'/affiliate'}>Produits amazon affilié</a>
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
