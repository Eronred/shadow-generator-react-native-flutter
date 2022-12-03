import React from 'react';
import './Components.css'

const Button = ({ label }) => {
    return (
        <button className='button'>
            {label}
        </button>
    );
}

export default Button;
