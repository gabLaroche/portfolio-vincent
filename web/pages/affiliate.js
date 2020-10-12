import React from 'react';
import PropTypes from 'prop-types';
import client from '../client';
import Layout from '../components/Layout/Layout';
import { urlFor, socialMediaQuery } from '../utils';
import styles from '../styles/affiliate.module.scss';

const query = `
{
    'categories': *[ _type == "affiliateProductCategory" ] {
        _id,
        title,
        "affiliateProducts": *[ _type == "affiliateProduct" && references(^._id) ]|order(productName) {..., 'imageUrl': image.asset->url}
    },
    ${socialMediaQuery}
}`;

const Affiliate = ({ doc }) => {
  const { categories, socialMediaLinks } = doc;

  return (
    <Layout title="Vincent Blouin | Produits Affiliés" className={styles.affiliate} socialMediaLinks={socialMediaLinks}>
      <h1>Mes produits amazon affiliés</h1>
      <ul className={styles['affiliate-category-list']}>
        {categories.map((category) => (
          <li key={category._id}>
            <h2>{category.title}</h2>
            <ul className={styles['product-list']}>
              { category.affiliateProducts.map((product) => (
                <li className={styles['product-list-item']} key={product._id}>
                  <a className={styles['product-list-item-link']} href={product.link} target="_blank" rel="noopener noreferrer">
                    <img className={styles['product-list-item-img']} src={urlFor(product.imageUrl).width(200).auto('format').url()} alt={product.productName} />
                    <p className={styles['product-list-item-bottom']}>
                      <span className={styles['product-list-item-name']}>{product.productName}</span>
                      <span className={styles['product-list-item-amazon']}>
                        Voir le prix sur Amazon
                        <i className="ri-external-link-fill" />
                      </span>
                    </p>
                  </a>
                </li>
              )) }
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const doc = await client.fetch(query);
  return {
    props: { doc }, // will be passed to the page component as props
  };
};

Affiliate.propTypes = {
  doc: PropTypes.shape({
    categories: PropTypes.array,
    socialMediaLinks: PropTypes.array,
  }).isRequired,

};

export default Affiliate;
