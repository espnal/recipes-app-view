import React from 'react';
import classes from './IngredientsTable.module.scss';
import Title from '../text/Title';
import Text from '../text/Text';

function IngredientsTable({ingredientsWithMeasures}) {
  return (
<>
<Title className={classes.title}>Ingredients</Title>
<table className={classes.ingredientsTable}>
    <tbody>
        {ingredientsWithMeasures.map((ingredients)=>(
            <tr key={ingredients.index}>
                <td>
                    <Text>{ingredients.ingredient}</Text>
                </td>
                <td>
                    <Text>{ingredients.measure}</Text>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</>
  )
}

export default IngredientsTable
