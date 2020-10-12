import React from 'react';
import PropTypes from 'prop-types';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import client from '../../client';
import CategoryList from '../../components/CategoryList/CategoryList';
import Layout from '../../components/Layout/Layout';
import About from '../../components/About/About';
import { socialMediaQuery } from '../../utils';

const categoriesQuery = '*[_type == "category"] { slug }';

const query = `
{
  'currentCategory': *[_type == "category" && slug.current == $slug] {
    ...,
    "projects": *[_type == 'project' && references(^._id)]{..., 'imageUrls': images[].asset->url}}[0] | order(_createdAt asc),
  'categories': *[_type == "category"],
  'about': *[_type == "about"] {..., 'imageUrl': image.asset->url}[0],
  ${socialMediaQuery}
}`;

const Category = ({ doc }) => {
    const { currentCategory, categories, about, socialMediaLinks } = doc;

    return (
        <Layout
            title={`Vincent Blouin | ${currentCategory.title}`}
            socialMediaLinks={socialMediaLinks}
        >
            <About content={about} />
            <CategoryList
                categories={categories}
                currentCategoryId={currentCategory._id}
            />
            <ProjectGrid projects={currentCategory.projects} />
        </Layout>
    );
};

export default Category;

export const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on persons
    const categories = await client.fetch(categoriesQuery);
    const paths = categories.map((category) => ({
        params: { slug: category.slug.current },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
    const doc = await client.fetch(query, { slug: params.slug });
    return { props: { doc } };
};

Category.propTypes = {
    doc: PropTypes.shape({
        currentCategory: PropTypes.shape({
            projects: PropTypes.array,
            title: PropTypes.string,
            _id: PropTypes.string,
        }),
        categories: PropTypes.array,
        about: PropTypes.object,
        socialMediaLinks: PropTypes.array,
        title: PropTypes.string,
        _id: PropTypes.string,
    }).isRequired,
};
