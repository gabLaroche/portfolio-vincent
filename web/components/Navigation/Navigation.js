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
            </div>
            <nav className={`menu ${isMenuOpened ? 'menu--open' : ''}`}>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a href={'#graphisme'}>Graphisme</a>
                        <ul>
                            <li>
                                <a href={'graphismeIcones'}>Impression</a>
                            </li>
                            <li>
                                <a href={'graphismeImpression'}>Impression</a>
                            </li>
                            <li>
                                <a href={'#graphimseIllustration'}>Illustration</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__list-item"><a href={'#photographie'}>Photographie</a></li>
                    <li className="menu__list-item"><a href={'#video'}>Vidéo</a></li>
                    <li className="menu__list-item"><a href={'#contact'}>Contact</a></li>
                </ul>
            </nav>
            {/*<a href={'#'}><img alt={'logo'} src={'./logo.png'} /></a>*/}
        </header>
    )
};

export default Navigation;
