import React from 'react'
import '../pages/home.css'

export default function Slider({
    label,
    direction,
    width,
    contentCenter: alignedItems,
    min,
    max,
    value,
    valueLabel,
    onChange
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction || 'column',
            alignItems: alignedItems || 'center',
            gap: 6
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <span>{label}</span>
                {valueLabel && <strong>{valueLabel}</strong>}
            </div>
            <input style={{
                width: width || 200
            }}
                type='range'
                min={min}
                max={max}
                value={value}
                onChange={onChange} />
        </div>
    )
}
