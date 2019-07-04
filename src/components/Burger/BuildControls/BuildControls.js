import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = (props) => {

    const ingredients = Object.keys(props.ingredients)
    .map(labelIngredients => { 
        const capitalized = labelIngredients.charAt(0).toUpperCase() + labelIngredients.slice(1);
        const disabled = props.ingredients[labelIngredients] === 0;
        return <BuildControl key={labelIngredients} 
                            label={capitalized} 
                            ingredientAdded={() => props.ingredientAdded(labelIngredients)} 
                            ingredientRemoved={() => props.ingredientRemoved(labelIngredients)}
                            disabled={disabled} /> 
    });

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {ingredients}
            <button 
                disabled={!props.purchasable} 
                className={classes.OrderButton}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
