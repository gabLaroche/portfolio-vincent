import React from 'react';
import Head from "next/head";
import Navigation from "../Navigation/Navigation";

const Layout = ({title, children, className, socialMediaLinks}) => (
    <>
        {title &&
            <Head>
                <title>{title}</title>
            </Head>
        }
        <div className={`body ${className ? className : ''}`}>
            <Navigation socialMediaLinks={socialMediaLinks} />
            <div className={'container'}>
                {children}
            </div>
            <footer>
                <p><small>&copy; {new Date().getFullYear()} Vincent Blouin. Tous droits réservé</small></p>
                <p><small>Développé par <a href={'https://gabriellaroche.dev'}>Gabriel Laroche</a></small></p>
            </footer>
        </div>
    </>
);

export default Layout;
