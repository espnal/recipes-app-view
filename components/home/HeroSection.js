import React from 'react';
import classes from '../home/HeroSection.module.scss'
import HeroImg from '../../images/banner.jpg';
import Text from '../text/Text';
import Image from 'next/image';
import ButtonWithLink from '../buttons/Button';

export default function HeroSection() {
  return (
    <section className={classes.hero__section}>
        <div className={classes.hero__container}>
            <div className={classes.hero__info}>
                <h1 className={classes.hero__title}>
                    Find the perfect meals 
                    {" "}
                    <span>Meal recipe</span>
                    {" "}
                    for you
                </h1>
                <Text> A listing websites of meal</Text>
                <div className={classes.hero__buttons}>
                    <ButtonWithLink link={'/meals'} variant="primary">Explore Meals</ButtonWithLink>
                    <ButtonWithLink link={'/savedMeals'}>Saved Meals</ButtonWithLink>
                </div>
            </div>
            <div className={classes.hero__img}>
                <Image src={HeroImg} alt="HeroImg" />
            </div>
        </div>
        </section>
  )
}
