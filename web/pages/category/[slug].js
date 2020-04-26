import React from 'react'
import Head from 'next/head';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import client from "../../client";
import '../../public/styles/global.scss';
import CategoryList from "../../components/CategoryList/CategoryList";
import Layout from "../../components/Layout/Layout";
import About from "../../components/About/About";

const categoriesQuery = `*[_type == "category"] { slug }`;

const query = `
{
  'currentCategory': *[_type == "category" && slug.current == $slug] {
    ...,
    "projects": *[_type == 'project' && references(^._id)]{..., 'imageUrls': images[].asset->url}}[0] | order(_createdAt asc),
  'categories': *[_type == "category"],
  'about': *[_type == "about"] {..., 'imageUrl': image.asset->url}[0]
}`;

const Category = ({doc}) => {
    const {currentCategory, categories, about} = doc;

    return (

        <Layout title={`Vincent Blouin | ${currentCategory.title}`}>
            <About content={about} />
            <CategoryList categories={categories} currentCategoryId={currentCategory._id} />
            <ProjectGrid projects={currentCategory.projects} />
        </Layout>
    )
};

export default Category;

export const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on persons
    const categories = await client.fetch(categoriesQuery);
    const paths = categories.map(category => ({
        params: { slug: category.slug.current }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
    const doc = await client.fetch(query, { slug: params.slug });
    return { props: { doc } };
};
