import React from 'react';
import './style.css'

const Button = ({onClick}) => {
    return (
        <button className='button' onClick={onClick}>
           <svg
                className="swap-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.99 11H19V8l4 4-4 4v-3H6.99v3L3 12l3.99-4v3z" />
            </svg>
        </button>
    );
};

export default Button;