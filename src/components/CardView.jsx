import React from 'react'
import '../pages/ShadowSection.css'

export default function CardView({ name }) {

    const CARD_SIZE = 160;
    return (
        <div
            className={`card-${name}`}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: CARD_SIZE,
                height: CARD_SIZE,
                // boxShadow: shadow
            }}
        >{name}
        </div>
    )
}
