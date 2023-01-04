import React from 'react'
import { codeColor } from '../utils/constants';
import { rgbToHex } from '../utils/utils'
export default function FlutterSection({ shadowOffsetWidth, shadowOffsetHeight, shadowColor, shadowRadius }) {
  const { key, value } = codeColor;
  const { r, g, b } = shadowColor;
  return (

    <>
      <code style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <span style={key}>{`BoxShadow(`}</span>
        <div>
          <span style={key}>  shadowColor:</span>
          <span style={{
            color: '#bae67e',
            // backgroundColor: rgbToHex(r, g, b),
            padding: 6,
            borderRadius: 4
          }}>"{`${rgbToHex(r, g, b)}`}",</span>
        </div>
        <span style={key}>{`  offset: const Offset( ${shadowOffsetWidth}, ${shadowOffsetHeight} )`},</span>
        <div>
          <span style={key}>  blurRadius: </span>
          <span style={value}>{`${shadowColor.a},`}</span>
        </div>
        <div>
          <span style={key}>  spreadRadius: </span>
          <span style={value}>{`${shadowRadius},`}</span>
        </div>
        <span style={key}>{`),`}</span>
      </code>
    </>
  )
}
