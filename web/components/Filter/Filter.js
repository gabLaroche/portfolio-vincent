import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ categories, handleCategoriesChange }) => {
  const [activeCategories, setActiveCategories] = useState([...categories]);

  const toggleCategory = (categoryId) => {
    if (activeCategories.find((catId) => catId === categoryId)) {
      setActiveCategories(activeCategories.filter((catId) => catId !== categoryId));
    } else {
      setActiveCategories([...activeCategories, categoryId]);
    }
  };

  useEffect(() => {
    const categoryIds = [];
    categories.forEach((category) => {
      categoryIds.push(category._id);
    });
  }, []);

  useEffect(() => {
    handleCategoriesChange(activeCategories);
  }, [activeCategories]);

  return (
    <div className={styles.filter}>
      <h2>Filtrer mes projets</h2>
      <ul className={styles.filter__list}>
        {categories.map((category) => (
          <li key={category._id}>
            <input
              className={styles.filter__input}
              type="checkbox"
              checked={activeCategories.find((catId) => catId === category._id) || false}
              onChange={() => toggleCategory(category._id)}
              id={category._id}
            />
            <label className={styles.filter__label} htmlFor={category._id}>{category.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.array.isRequired,
  handleCategoriesChange: PropTypes.func.isRequired,
};

export default Filter;
