import classes from './Categories.module.scss';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader'
import CategoryItem from './CategoryItem';

function Categories({
    categories, 
    categoriesIsLoading, 
    categoriesIsError,
    selectedCategory,
    setSelectedCategory,
    setQuery,
}) {
  if(categoriesIsError){
    return ("Error")
  }
  if(categoriesIsLoading){
    return <BeatLoader loading={categoriesIsLoading} color="#fff"/>
  }
  return (
    <div className={classes.categories__container}>
      {categories && categories.map((item)=>
      (
      <CategoryItem 
      category={item} 
      key={item.idCategory} 
      selectedCategory={selectedCategory} 
      onclickHandler={()=>{
        setSelectedCategory(item.strCategory);
        setQuery("");
      }}/>
      )
      )}
    </div>
  )
}

export default Categories
