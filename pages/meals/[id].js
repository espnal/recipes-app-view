import React, { useEffect } from 'react'
import classes from './meals.module.scss';
import {useRouter} from 'next/router'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import Text from '../../components/text/Text';
import Image from 'next/image';
import Title from '../../components/text/Title';
import PointText from  '../../components/text/PointText';
import IngredientsTable from '../../components/mealspage/IngredientsTable';
import {Button} from '../../components/buttons/Button';
import toast from 'react-hot-toast';
import { FaHeartBroken, FaHeart } from 'react-icons/fa';
export const getSingleMeal = async ({queryKey}) => {

    const {data} = await axios.get(`/lookup.php?i=${queryKey[1]}`)
    return data?.meals?.[0];
}

function singleMealPage() {
    const [isSaved, setIsSaved] = React.useState(false);
    const router = useRouter();
    const {id} = router.query;

    const {data, isLoading, isError, error} = useQuery(['singleMeal', id], getSingleMeal)

    useEffect(()=>{
      if(localStorage.getItem('savedMeals')){
        const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
      if(savedMeals.includes(id)){
        setIsSaved(true)
      }else{
        setIsSaved(false)
      }
      }
    },[id])

    if(isError) {
        return(
            <Text>
                Error:{" "}
                {error.message}
            </Text>
        )
    }

    if(isLoading||!data) {
        return (<BeatLoader color="#fff"/>)
    }

    const ingredients = Object.keys(data).filter((key) => 
    key.startsWith('strIngredient')).filter((key) => data[key] !== "" && data[key] !== null)
  
    const ingredientsWithMeasures = ingredients.map((key, index) => (
      {
        index: index + 1,
        ingredient: data[key],
        measure: data[`strMeasure${index + 1}`]
      }
    ))
    const handleSaveButton = () => {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals')) || [];
    
      if (!savedMeals.includes(data.idMeal)) {
        savedMeals.push(data.idMeal);
        localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
        toast.success('Meal Saved Successfully');
        setIsSaved(true)
      } else {
        const updatedMeals = savedMeals.filter((meal) => meal !== data.idMeal);
        localStorage.setItem('savedMeals', JSON.stringify(updatedMeals));
        toast.error('Meal Removed Successfully');
        setIsSaved(false)
      }
    
      // setIsSaved(!savedMeals.includes(data.idMeal));
    };
    
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image src={data.strMealThumb} height={300} width={300}>
          </Image>
        </div>
        <div className={classes.info}>
          <Title variant={"primary"}>{data.strMeal}</Title>
          <PointText className={classes.infText}>
            Category:
            {' '}
            {data.strCategory}
          </PointText>
          <PointText className={classes.infText}>
            Area:
            {' '}
            {data.strArea}
          </PointText>
          <PointText className={classes.infText}>
            Tags:
            {' '}
            {data?.strTags?.split(',').join(', ')}
          </PointText>
          {isSaved &&(
          <Text className={classes.greenText}>You already saved the meal</Text>
          )}
          
          <Button variant="primary" className={classes.saveButton} onClick={handleSaveButton}>
            {isSaved ? (
            <>
            <FaHeartBroken className={classes.saveIcon}></FaHeartBroken>
            {" "}
            Remove
            </>)
            :
            (
              <>
              <FaHeart className={classes.saveIcon}></FaHeart>
              {" "}
              Save
              </>
            )}
          </Button>
        </div>
      </div>

      <div className={classes.ingredientsTable}>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures}/>
      </div>
        <div className={classes.instrutions}>
        <Title>Instructions</Title>
        {data.strInstructions.split('.').filter((sentence)=> sentence !== "").map((sentence)=>(
          <PointText key={sentence}>
            {sentence}
            .
          </PointText>
        ))}
        </div>
    </div>
  )
}

export default singleMealPage
