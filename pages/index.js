import React from 'react';
import Head from 'next/head';
import Navigation from "../components/Navigation/Navigation";
import Prismic from "prismic-javascript";
import { RichText } from 'prismic-reactjs';
import { Client, linkResolver, hrefResolver } from "../prismic-configuration";
import '../public/styles/global.scss';

const Home = ({projects, categories}) => {

    const subcategories = [];

    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].data.subcategories.length; j++) {
            const subcategory = categories[i].data.subcategories[j].subcategory;
            if (subcategory.type) {
                subcategories.push(subcategory.id);
            }
        }
    }

    return (
        <>
            <Head>
              <title>Vincent Blouin</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

          <div className="container">
            <main>
                <section id={'intro'}>
                    <h1>Vincent Blouin</h1>
                    <h2>Photo/Graphisme/Vidéo</h2>
                </section>
                <div className={'filter'}>
                    <h2>Filtrer mes projets</h2>
                    <ul className={'filter__list'}>
                        {categories.map(category => {
                            if (!subcategories.includes(category.id)) {
                                return (
                                    <li className={'filter__list-item'} key={category.id}>
                                        <input className={'filter__input'} type={'checkbox'} id={category.id}/>
                                        <label className={'filter__label'} htmlFor={category.id}>{category.data.name}</label>

                                        {category.data.subcategories[0].subcategory.type && (
                                            <ul>
                                                {category.data.subcategories.map(subcategoryRef => {
                                                    const subcategory = categories.find(category => category.id === subcategoryRef.subcategory.id);
                                                    return (
                                                            <li key={subcategory.id}>
                                                                <input className={'filter__input'} type={'checkbox'} id={subcategory.id}/>
                                                                <label className={'filter__label'} htmlFor={subcategory.id}>{subcategory.data.name}</label>
                                                            </li>
                                                        )
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <section className={'mosaic'}>
                    {projects.map((project) => (
                        <div key={project.id} className={'mosaic__item'}>
                            <img src={project.data.image.url} />
                        </div>
                    ))}
                </section>
            </main>

            <footer>
                <small>&copy; {new Date().getFullYear()} Vincent Blouin. Tout droits réservé</small>
            </footer>
          </div>
        </>
)};

Home.getInitialProps = async function({ req }) {
    try {
        const projects = await Client(req).query(
            Prismic.Predicates.at("document.type", "project")
        );

        const categories = await Client(req).query(
            Prismic.Predicates.at("document.type", "category"),
            { orderings: "[document.last_publication_date]" }
        );

        return {
            projects: projects ? projects.results : [],
            categories: categories ? categories.results : [],
        };
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default Home
