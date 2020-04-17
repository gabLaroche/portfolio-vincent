import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import Prismic from "prismic-javascript";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Client } from "../prismic-configuration";
import '../public/styles/global.scss';

const Home = ({projects, categories}) => {

    const [subcategories, setSubcategories] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);
    const projectRef = useRef(null);

    const toggleCategory = (categoryId) => {
        if (activeCategories.includes(categoryId)) {
            setActiveCategories(activeCategories.filter(activeCategoryId => activeCategoryId !== categoryId));
        } else {
            setActiveCategories([...activeCategories, categoryId]);
        }
    };

    useEffect(() => {
        const subcategoriesInitial = [];
        const activeCategoriesInitial = [];
        for (let i = 0; i < categories.length; i++) {
            activeCategoriesInitial.push(categories[i].id);
            for (let j = 0; j < categories[i].data.subcategories.length; j++) {
                const subcategory = categories[i].data.subcategories[j].subcategory;
                if (subcategory.type) {
                    subcategoriesInitial.push(subcategory.id);
                }
            }
        }
        setActiveCategories(activeCategoriesInitial);
        setSubcategories(subcategoriesInitial);
    }, []);

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
                                        <input
                                            className={'filter__input'}
                                            type={'checkbox'}
                                            id={category.id}
                                            checked={activeCategories.includes(category.id) || false}
                                            onChange={() => toggleCategory(category.id)}
                                        />
                                        <label className={'filter__label'} htmlFor={category.id}>{category.data.name}</label>

                                        {category.data.subcategories[0].subcategory.type && (
                                            <ul>
                                                {category.data.subcategories.map(subcategoryRef => {
                                                    const subcategory = categories.find(category => category.id === subcategoryRef.subcategory.id);
                                                    return (
                                                            <li key={subcategory.id}>
                                                                <input
                                                                    className={'filter__input'}
                                                                    type={'checkbox'}
                                                                    checked={activeCategories.includes(subcategory.id) || false}
                                                                    onChange={() => toggleCategory(subcategory.id)} id={subcategory.id}
                                                                />
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
                    {projects.map((project) => {
                        const projectCategories = project.data.categories.map(category => {return activeCategories.includes(category.category.id) ? 'true' : 'false'});
                        const isShown = projectCategories.includes('true');
                        console.log(projectCategories);
                        console.log(isShown);

                        if (isShown) {
                            return (
                                <div
                                    key={project.id}
                                    className={`mosaic__item ${project.data.extra_images.length > 0 ? 'mosaic__item--multiple-images' : ''}`}
                                >
                                    <LazyLoadImage src={project.data.image.url} effect='opacity' />

                                    {project.data.extra_images.length > 0 &&
                                        project.data.extra_images.map((img, index) => (
                                            <LazyLoadImage key={index} src={img[`image${index + 1}`].url} effect='opacity' />
                                        ))
                                    }
                                </div>
                            )}
                        }
                    )}
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
            Prismic.Predicates.at("document.type", "project"),
            { orderings: "[my.project.title]" }
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
