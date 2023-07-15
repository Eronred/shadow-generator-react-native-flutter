import React from 'react'
import { codeColor } from '../utils/constants'

import { rgbToHexFlutter } from '../utils/utils'

export default function FlutterSection({
  shadowOffsetWidth,
  shadowOffsetHeight,
  shadowColor,
  shadowRadius,
  shadowSpread,
}) {
  const { key, value } = codeColor
  const { r, g, b, a } = shadowColor

  return (
    <>
      <code
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <span style={key}>{`BoxShadow(`}</span>
        <div>
          <span style={key}> color: </span>
          <span style={value}>{`Color(0x${rgbToHexFlutter(
            r,
            g,
            b,
          )}).withOpacity(${a}),`}</span>
        </div>
        <div>
          <span style={key}> offset: </span>
          <span style={value}>{`Offset(`}</span>
          <span style={value}>{`${shadowOffsetWidth}, `}</span>
          <span style={value}>{`${shadowOffsetHeight}),`}</span>
        </div>
        <div>
          <span style={key}> blurRadius: </span>
          <span style={value}>{`${shadowRadius},`}</span>
        </div>
        <div>
          <span style={key}> spreadRadius: </span>
          <span style={value}>{`${shadowSpread},`}</span>
        </div>
        <span style={key}>{`)`}</span>
      </code>
    </>
  )
}
