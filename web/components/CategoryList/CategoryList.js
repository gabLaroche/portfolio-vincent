import React from 'react';
import './CategoryList.scss';
import Link from "next/link";

const CategoryList = ({categories, currentCategoryId}) => {
    return (
        <ul className={'category-list'} id={'c'}>
            <li className={'category-list-item'}>
                <Link href={'/'} as={`/#c`}>
                    <a className={`category-list-item-link ${!currentCategoryId ? 'category-list-item-link--active': ''}`}>
                        Tous les projets
                    </a>
                </Link>
            </li>
            {categories.map(category => (
                <li key={category._id} className={'category-list-item'}>
                    <Link href={`${!!currentCategoryId ? '[slug]' : 'category/[slug]'}`} as={`/category/${category.slug.current}#c`}>
                        <a className={`category-list-item-link ${category._id === currentCategoryId ? 'category-list-item-link--active': ''}`}>
                            {category.title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;
