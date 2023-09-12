import React from 'react';
import classes from './SingleMealCard.module.scss';
import Link from 'next/link';
import Title from '../text/Title'
import Image from 'next/image';

function SingleMealCard({meal}) {
  return (
    <Link href={`/meals/${meal.idMeal}`} legacyBehavior>
      <a className={classes.item}>
        <Image src={meal.strMealThumb} height="200" width="200" />
        <Title className={classes.title} variant="secondary">{meal.strMeal}</Title>
      </a>
    </Link>
  )
}

export default SingleMealCard
