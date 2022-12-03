import React, { useState, useEffect } from 'react';
import { RgbaColorPicker } from "react-colorful";
import { rgba } from 'polished'
import Slider from '../components/Slider'
import { rgbToHex, hexToRgbA } from '../utils/utils'
import './ShadowEditor.css'
import CopyButton from '../components/CopyButton';
import { flexRowSpaceBetween, flexRowCentered } from '../styles/style';

const ShadowEditor = () => {
    const [shadowColor, setShadowColor] = useState({ r: 0, g: 0, b: 0, a: 0.32 })
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(7)
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(11)
    const [shadowOpacity, setShadowOpacity] = useState(0.25)
    const [shadowRadius, setShadowRadius] = useState(21)
    const [isValid, setIsValid] = useState(false)
    const [typedColor, setTypedColor] = useState('')
    const { r, g, b, a } = shadowColor;
    const [isCopied, setCopied] = useState(false);

    const shadowCode =
        `
        shadowColor:${rgbToHex(r, g, b)},
        shadowOffset: {
          width: ${shadowOffsetWidth},
          height: ${shadowOffsetHeight},
        },
        shadowOpacity: ${shadowOpacity},
        shadowRadius: ${shadowRadius},
        elevation: ${shadowOffsetHeight * 2},
        `
    const colorList = [
        {
            r: 24, g: 197, b: 251, a: 1
        },
        {
            r: 0, g: 0, b: 0, a: 1
        },
        {
            r: 23, g: 55, b: 0, a: 1
        },
        {
            r: 34, g: 88, b: 0, a: 1
        },
        {
            r: 43, g: 67, b: 0, a: 1
        },
        {
            r: 76, g: 87, b: 0, a: 1
        },
        {
            r: 45, g: 23, b: 0, a: 1
        },
    ]
    async function copyTextToClipboard() {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(shadowCode);
        } else {
            return document.execCommand('copy', true, shadowCode);
        }
    }
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard()
            .then(() => {
                // If successful, update the isCopied state value
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const codeColor = {
        key: {
            color: '#D2D0C7',
            fontWeight: '500'
        },
        value: {
            color: '#FC8F41'

        }
    }
    const { key, value } = codeColor;

    return (
        <div style={flexRowSpaceBetween}>
            <div className="editor__container">
                <div className="sidebar">
                    <div className="slider__container">
                        <h4>Shadow Controller</h4>
                        <div style={{
                            display: 'flex',
                            gap: 12,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginTop: 12
                        }}>
                            <Slider
                                label="Width"
                                max={50}
                                min={-50}
                                value={shadowOffsetWidth}
                                valueLabel={shadowOffsetWidth}
                                onChange={(e) =>
                                    setShadowOffsetWidth(e.target.value)}
                            />
                            <Slider
                                label="Height"
                                max={50}
                                min={-50}
                                value={shadowOffsetHeight}
                                valueLabel={shadowOffsetHeight}
                                onChange={(e) =>
                                    setShadowOffsetHeight(e.target.value)}
                            />

                            <Slider
                                label="Radius"
                                max={50}
                                min={0}
                                value={shadowRadius}
                                valueLabel={shadowRadius}
                                onChange={(e) =>
                                    setShadowRadius(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="color__container">
                        <h4>Color and Opacity</h4>
                        <div style={{
                            display: 'flex',
                            gap: 12,
                            flexDirection: 'column',
                            marginTop: 12
                        }}>
                            <RgbaColorPicker
                                color={shadowColor}
                                onChange={
                                    setShadowColor
                                } />
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',
                                    gap: 4,
                                }}>
                                {/*<div
                                        style={{
                                            width: 25,
                                            height: 25,
                                            borderRadius: '100%',
                                            background: rgba(r, g, b, a),
                                            border: `solid 2px #F0F0F0`
                                        }}>
                                    </div>
                                     <input
                                        style={{
                                            background: '#F0F0F0',
                                            borderRadius: 6,
                                            border: 'none',
                                            width: 90,
                                            padding: 6
                                        }}
                                        placeholder='Hex Color'
                                        type='text'
                                        value={typedColor}
                                        onChange={(e) => setTypedColor(e.target.value)}
                                    />
                                    {isValid ? <span>Invalid Color!</span> : ""} 
                                */}
                                </div>
                                <div
                                    className='color__card__container'
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        gap: 4,
                                        marginTop: 12
                                    }}>
                                    {colorList.map((color, index) => {
                                        const { r, g, b, a } = color;
                                        return (
                                            <div
                                                className='color__card'
                                                key={index}
                                                onClick={() => {
                                                    setShadowColor(color)
                                                }}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    borderRadius: '100%',
                                                    background: rgba(r, g, b, a),
                                                    border: `solid 2px ${rgba(255, 255, 255, 0.49)}`,
                                                    cursor: 'pointer',
                                                    flexWrap: 'wrap'
                                                }}>
                                            </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="code__bar">
                    <div className='tab__bar'>
                        <div className='tab tab__selected react'>
                            React Native
                        </div>
                        <div className='tab flutter'>
                            Flutter
                        </div>
                        <div className='tab swift'>
                            Swift
                        </div>
                    </div>
                    <pre style={{
                        background: '#161820',
                        color: 'white',
                        textAlign: 'left',
                        padding: 24,
                        borderRadius: 12,
                        fontFamily: 'JetBrains Mono',
                        fontWeight: '500',
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.6
                    }}>
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
                        <CopyButton
                            onClick={handleCopyClick}
                            label={isCopied ? "Copied!" : "Copy"}
                        />
                    </pre>
                </div>
            </div>
            <div className='simulator__container'>
                <div className='simulator__header'>
                    <div style={flexRowCentered}>
                        <div className='circle close'></div>
                        <div className='circle smaller'></div>
                        <div className='circle full'></div>
                    </div>
                    <span>iPhone 11 Pro</span>
                </div>
                <div className='ios__screen'>
                    <div className='screen__top'></div>
                    <div className='content'>
                        <button style={{
                            boxShadow:
                                `${shadowOffsetWidth}px 
                                ${shadowOffsetHeight}px 
                                ${shadowRadius}px 
                                ${rgba(shadowColor.r, shadowColor.g, shadowColor.b, shadowColor.a)}`,
                        }}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShadowEditor;
