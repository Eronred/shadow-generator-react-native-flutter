import React from 'react'

export default function Link(
    { url, label }
) {
    return (
        <a style={{
            textDecoration: 'none',
            color: '#333333',
            fontSize: 18

        }} href={url} target='_blank' >{label}</a>
    )
}
