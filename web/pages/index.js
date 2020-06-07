import React from 'react';
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import client from "../client";
import '../public/styles/global.scss';
import CategoryList from "../components/CategoryList/CategoryList";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";
import { socialMediaQuery } from "../utils";

const query = `
{
  'categories': *[_type == "category"],
  'projects': *[_type == "project"] {
    ...,
    'categories': categories[]->,
    'imageUrls': images[].asset->url
  },
  'about': *[_type == "about"] {..., 'imageUrl': image.asset->url}[0],
  ${socialMediaQuery}
}`;

const Home = ({doc}) => {
    const {categories, projects, about, socialMediaLinks} = doc;

    return (
        <Layout title={'Vincent Blouin'} socialMediaLinks={socialMediaLinks}>
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
