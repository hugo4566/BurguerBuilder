import React from 'react'
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div>{props.label}</div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}

export default BuildControl
