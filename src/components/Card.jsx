import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import card from '../assets/card.svg';

export default function Card({ shadowOffsetWidth, shadowOffsetHeight, shadowRadius, shadowColor, shadowSpread }) {
    const { r, g, b, a } = shadowColor;
    return (
        <div>
            <div
                style={{
                    boxShadow: `${shadowOffsetWidth}px ${shadowOffsetHeight}px ${shadowRadius}px ${shadowSpread}px ${rgba(r, g, b, a)}`,
                    overflow: 'hidden'
                }}
            >
                <img src={card} style={{ width: '100%' }} alt="" />
            </div>
        </div>
    );
}

Card.propTypes = {
    shadowOffsetWidth: PropTypes.number.isRequired,
    shadowOffsetHeight: PropTypes.number.isRequired,
    shadowRadius: PropTypes.number.isRequired,
    shadowColor: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired
    }).isRequired,
    shadowSpread: PropTypes.number.isRequired
};
