import React from 'react'
import { DELAY, suggestedColors, componentData, codeColor } from '../utils/constants';
import { rgbToHex, hexToRgbA } from '../utils/utils'

export default function RNSection({ shadowOffsetWidth, shadowOffsetHeight, shadowColor, shadowRadius }) {
    const { key, value } = codeColor;
    const { r, g, b } = shadowColor;

    return (
        <>
            <code style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <div>
                    <span style={key}>shadowColor:</span>
                    <span style={{
                        color: '#bae67e',
                        // backgroundColor: rgbToHex(r, g, b),
                        padding: 6,
                        borderRadius: 4
                    }}>"{`${rgbToHex(r, g, b)}`}"</span>
                </div>
                <span style={key}>{`shadowOffset: {`}</span>
                <div>
                    <span style={key}>   width: </span>
                    <span style={value}>{`${shadowOffsetWidth}`},</span>
                </div>
                <div>
                    <span style={key}>   height: </span>
                    <span style={value}>{`${shadowOffsetHeight}`},</span>
                </div>
                <span style={key}>{`},`}</span>
                <div>
                    <span style={key}>shadowOpacity: </span>
                    <span style={value}>{`${shadowColor.a},`}</span>
                </div>
                <div>
                    <span style={key}>shadowRadius: </span>
                    <span style={value}>{`${shadowRadius},`}</span>
                </div>
                <div>
                    <span style={key}>elevation: </span>
                    <span style={value}>{`${shadowOffsetHeight * 2}`}</span>
                </div>
                <span style={key}>{`},`}</span>
            </code>
        </>
    )
}
