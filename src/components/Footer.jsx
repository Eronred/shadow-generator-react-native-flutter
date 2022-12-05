import React from 'react'
import Link from './Link';

export default function Footer() {
    return (
        <div style={{
            marginBottom: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 6
        }}>
            <span style={{
                fontSize: 18, 
                color: '#101828'
            }}>Build by</span>
            <Link
                url="https://twitter.com/imeronn"
                label="Eren"
            />
        </div>
    )
}
