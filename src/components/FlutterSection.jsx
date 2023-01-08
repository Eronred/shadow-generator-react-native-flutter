import React from 'react'
import { codeColor } from '../utils/constants';
import { rgbToHex } from '../utils/utils'


export default function FlutterSection({ shadowOffsetWidth, shadowOffsetHeight, shadowColor, shadowRadius, shadowSpread }) {
  const { key, value } = codeColor;
  const { r, g, b, a } = shadowColor;
  return (

    <>
      <code style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <span style={key}>{`BoxShadow(`}</span>
        <div>
          <span style={key}>  color: Colors.</span>
          <span style={{
            color: '#bae67e',
          }}>[{`${rgbToHex(r, g, b)}`}]</span>
          <span style={key}>.withOpacity</span>
          <span style={value}>{`(${a})`}</span>
        </div>
        <div>
          <span style={key}>  offset: </span>
          <span style={key}>{` const Offset( `}</span>
          <span style={value}>{`${shadowOffsetWidth}.`}</span>
          <span style={value}>{`${shadowOffsetHeight} ),`}</span>

        </div>
        <div>
          <span style={key}>  blurRadius: </span>
          <span style={value}>{`${shadowRadius},`}</span>
        </div>
        <div>
          <span style={key}>  spreadRadius: </span>
          <span style={value}>{`${shadowSpread},`}</span>
        </div>
        <span style={key}>{`),`}</span>
      </code>
    </>
  )
}
