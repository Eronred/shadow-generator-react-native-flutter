import React from 'react';
import PropTypes from 'prop-types';
import './Components.css';

const Button = ({ label }) => {
    return (
        <button className="button">
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired
};

export default Button;
