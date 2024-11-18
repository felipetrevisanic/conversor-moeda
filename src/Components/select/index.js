import React from 'react';
import './style.css'

const Select = ({ label, options, value, onChange }) => {
    console.log('Options recebidas no Select:', options);

    return (
        <div className='select-container'>
            <label className='select-label'>{label}</label>
            <select className='select' value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;