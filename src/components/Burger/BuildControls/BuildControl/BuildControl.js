import React from 'react'
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button disabled={props.disabled} className={classes.Less} onClick={props.ingredientRemoved}>Less</button>
            <button className={classes.More} onClick={props.ingredientAdded}>More</button>
        </div>
    )
}

export default BuildControl
