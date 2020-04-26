import React from 'react';
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import client from "../client";
import '../public/styles/global.scss';
import CategoryList from "../components/CategoryList/CategoryList";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";

const query = `
{
  'categories': *[_type == "category"],
  'projects': *[_type == "project"] {
    ...,
    'categories': categories[]->,
    'imageUrls': images[].asset->url
  },
  'about': *[_type == "about"] {..., 'imageUrl': image.asset->url}[0]
}`;

const Home = ({doc}) => {
    const {categories, projects, about} = doc;

    return (
        <Layout title={'Vincent Blouin'}>
            <About content={about} />
            <CategoryList categories={categories} />
            <ProjectGrid projects={projects} />
        </Layout>
)};

export const getStaticProps = async () => {
    const doc = await client.fetch(query);
    return {
        props: { doc } // will be passed to the page component as props
    };
};

export default Home
