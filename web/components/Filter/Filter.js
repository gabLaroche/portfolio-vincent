import React, {useState, useEffect} from 'react';
import './Filter.scss';

const Filter = ({categories, handleCategoriesChange}) => {
    const [activeCategories, setActiveCategories] = useState([...categories]);

    const toggleCategory = (categoryId) => {
        if (activeCategories.find(catId => catId === categoryId)) {
            setActiveCategories(activeCategories.filter(catId => catId !== categoryId));
        } else {
            setActiveCategories([...activeCategories, categoryId]);
        }
    };


    useEffect(() => {
        const categoryIds = [];
        categories.forEach(category => {
            categoryIds.push(category._id)
        });
    }, []);

    useEffect(() => {
        handleCategoriesChange(activeCategories);
    }, [activeCategories]);

    return (
        <div className={'filter'}>
            <h2>Filtrer mes projets</h2>
            <ul className={'filter__list'}>
                {categories.map(category => {
                    return (
                        <li key={category._id}>
                            <input
                                className={'filter__input'}
                                type={'checkbox'}
                                checked={activeCategories.find(catId => catId === category._id) || false}
                                onChange={() => toggleCategory(category._id)}
                                id={category._id}
                            />
                            <label className={'filter__label'} htmlFor={category._id}>{category.title}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Filter;
