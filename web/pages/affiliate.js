import React from 'react';
import client from "../client";
import '../public/styles/global.scss';
import Layout from "../components/Layout/Layout";

const query = `
{
  'affiliateProducts': *[_type == "affiliateProduct"],
}`;

const Affiliate = ({doc}) => {
    const {affiliateProducts} = doc;
    console.log(affiliateProducts);

    return (
        <Layout title={'Vincent Blouin | Produits Affiliés'}>
            <ul className={'product-list'}>
                { affiliateProducts.map(product => (
                    <li className={'product-list-item'} key={product._id} dangerouslySetInnerHTML={{__html: product.productHtml.code}}></li>
                )) }
            </ul>
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
