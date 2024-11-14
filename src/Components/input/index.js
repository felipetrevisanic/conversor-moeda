import React from 'react';
import './style.css'

const Input = ({type, placeholder, value, onChange, label, width}) => {
    return (
        <div className='input-container'>
            <label className='input-label'>{label}</label>
            <input 
                className='input' 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                label={label} 
                style={{
                    width: width || '300px'
                }}
            />
        </div>
    );
};

export default Input;