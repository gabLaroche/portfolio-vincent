import React from 'react';
import Head from "next/head";

const Layout = ({title, children, className}) => (
    <>
        {title &&
            <Head>
                <title>{title}</title>
            </Head>
        }
        <main className={`container ${className ? className : ''}`}>
            {children}
        </main>
        <footer>
            <p><small>&copy; {new Date().getFullYear()} Vincent Blouin. Tout droits réservé</small></p>
            <p><small>Développé par <a href={'https://gabriellaroche.dev'}>Gabriel Laroche</a></small></p>
        </footer>
    </>
);

export default Layout;
