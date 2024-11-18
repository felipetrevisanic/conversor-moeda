import React from 'react';
import './style.css'

const Button = ({onClick}) => {
    return (
        <button className='button' onClick={onClick}>
           Converter
        </button>
    );
};

export default Button;