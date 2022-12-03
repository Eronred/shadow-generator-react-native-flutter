import React from 'react'

export default function Banner({ label }) {
    return (
        <>
            <div
                style={{
                    backgroundColor: '#0A84FF',
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
                }}>
                {label}
            </div>
        </>
    )
}
