import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = () => {
    return (
        <div className={classes.BuildControls}>
            <BuildControl label="salad"/>
        </div>
    )
}

export default BuildControls
