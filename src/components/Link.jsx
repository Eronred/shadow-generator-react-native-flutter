import React from 'react'

export default function Link(
    { url, label }
) {
    return (
        <a style={{
            textDecoration:'none',
            color:'gray',
            fontSize:18

        }} href={url} _blank >{label}</a>
    )
}
