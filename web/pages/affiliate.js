import React from 'react';
import client from "../client";
import '../public/styles/global.scss';
import Layout from "../components/Layout/Layout";
import {urlFor, socialMediaQuery} from "../utils";
import '../public/styles/pages/affiliate.scss'

const query = `
{
    'categories': *[ _type == "affiliateProductCategory" ] {
        _id,
        title,
        "affiliateProducts": *[ _type == "affiliateProduct" && references(^._id) ]|order(productName) {..., 'imageUrl': image.asset->url}
    },
    ${socialMediaQuery}
}`;

const Affiliate = ({doc}) => {
    const {categories, socialMediaLinks} = doc;

    return (
        <Layout title={'Vincent Blouin | Produits Affiliés'} className={'affiliate'} socialMediaLinks={socialMediaLinks}>
            <h1>Mes produits amazon affiliés</h1>
            {
                <ul className={'affiliate-category-list'}>
                    {categories.map(category => (
                        <li key={category._id}>
                            <h2>{category.title}</h2>
                            <ul className={'product-list'}>
                                { category.affiliateProducts.map(product => (
                                    <li className={'product-list-item'} key={product._id}>
                                        <a className={'product-list-item-link'} href={product.link} target='_blank' rel='noopener noreferrer'>
                                            <img className={'product-list-item-img'} src={urlFor(product.imageUrl).width(200).auto('format').url()} alt={`A picture of ${product.productName}`} />
                                            <p className={'product-list-item-bottom'}>
                                                <span className={'product-list-item-name'}>{product.productName}</span>
                                                <span className={'product-list-item-amazon'}>Voir le prix sur Amazon <i className="ri-external-link-fill"></i></span>
                                            </p>
                                        </a>
                                    </li>
                                )) }
                            </ul>
                        </li>
                    ))}
                </ul>
            }
        </Layout>
    )
};

export const getStaticProps = async () => {
    const doc = await client.fetch(query);
    return {
        props: { doc } // will be passed to the page component as props
    };
};

export default Affiliate
