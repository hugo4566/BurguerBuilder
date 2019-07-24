import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} value={props.value}
            onChange={props.changed} {...props.elementConfig} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} value={props.value}
            onChange={props.changed} {...props.elementConfig} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                    <option></option>
                </select>
            );
            break;
        default:
            inputElement = <input className={classes.InputElement} value={props.value}
            onChange={props.changed} {...props.elementConfig} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
