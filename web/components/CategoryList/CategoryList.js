import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './CategoryList.module.scss';

const CategoryList = ({ categories, currentCategoryId }) => (
    <ul className={styles['category-list']} id="c">
        <li className={styles['category-list-item']}>
            <Link href="/" as="/#c">
                <a
                    className={classnames(
                        styles['category-list-item-link'],
                        !currentCategoryId &&
                            styles['category-list-item-link--active']
                    )}
                >
                    Tous les projets
                </a>
            </Link>
        </li>
        {categories.map((category) => (
            <li key={category._id} className={styles['category-list-item']}>
                <Link
                    href={`${currentCategoryId ? '[slug]' : 'category/[slug]'}`}
                    as={`/category/${category.slug.current}#c`}
                >
                    <a
                        className={classnames(
                            styles['category-list-item-link'],
                            category._id === currentCategoryId &&
                                styles['category-list-item-link--active']
                        )}
                    >
                        {category.title}
                    </a>
                </Link>
            </li>
        ))}
    </ul>
);

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategoryId: PropTypes.string.isRequired,
};

export default CategoryList;
