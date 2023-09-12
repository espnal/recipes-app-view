import classes from './About.module.scss';
import React from 'react';
import Title from '../text/Title';
import Text from '../text/Text';

function About() {
  return (
    <div className={classes.about}>
        <Title>What is Nayi Recipes</Title>
        <Text>Explore our extensive collection of meticulously selected recipes to suit all tastes and occasions. From classic dishes that will evoke nostalgia to innovative creations that will awaken your palate, Nayi Recipes is the place where tradition and modernity merge in harmony.
            
            </Text>
            <Text>Feeling inspired to cook like a real chef? Whether you are an enthusiastic beginner or an experienced cook, our detailed and easy-to-follow recipes will guide you every step of the way. We provide you with helpful tips, culinary techniques and cooking secrets that will turn you into a master of the kitchen.

Plus, at Nayi Recipes, we don't just share recipes, we share stories. Discover the origin of each dish, the special ingredients that make it unique and the anecdotes that surround it. Immerse yourself in the rich culinary culture behind every bite and connect with the passion that brings people together through food.</Text>
    </div>
  )
}

export default About