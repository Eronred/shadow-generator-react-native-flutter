import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ label }) {
    return (
        <a
            href='https://reactnativecomponents.com/'
            
            style={{
                backgroundColor: '#000',
                width: '100%',
                height: 40,
                position: 'fixed',
                top: 0,
                zIndex: 9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: 18,
            }}
        >
            {label}
        </a>
    );
}

Banner.propTypes = {
    label: PropTypes.string.isRequired,
};
