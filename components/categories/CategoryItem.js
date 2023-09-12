import classes from './CategoryItem.module.scss';
import React from 'react';
import clsx from 'clsx';

function CategoryItem({category, selectedCategory, onclickHandler}) {
    const isSelected = category.strCategory === selectedCategory                                                                                                                                                                                                                                                                                                                                                                                                                                          
  return (
    <button type="button" 
    className={clsx(classes.item, isSelected && classes.item__selected)}
    onClick = {onclickHandler}
    >
      {category.strCategory}
    </button>
  )
}

export default CategoryItem
