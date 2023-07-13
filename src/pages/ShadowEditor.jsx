import React, { useState, useEffect } from 'react'
import './ShadowEditor.css'
import { Card, Slider, CopyButton } from './index'
import { useCopyToClipboard } from '../hooks/index'
import { RgbaColorPicker } from 'react-colorful'
import { rgba } from 'polished'
import {
  rgbToHex,
  rgbToHexFlutter,
  hexToRgbA,
  createSvgElement,
} from '../utils/utils'
import {
  DELAY,
  suggestedColors,
  codeColor,
  componentData,
} from '../utils/constants'
import { flexRowSpaceBetween, flexRowCentered } from '../styles/style'
import RNSection from '../components/RNSection'
import FlutterSection from '../components/FlutterSection'

const ShadowEditor = () => {
  const [shadowColor, setShadowColor] = useState({ r: 0, g: 0, b: 0, a: 1 })
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(8)
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(8)
  const [shadowOpacity, setShadowOpacity] = useState(0)
  const [svgValue, setSvgValue] = useState('')
  const [shadowRadius, setShadowRadius] = useState(0)
  const [shadowSpread, setShadowSpread] = useState(4)
  const { r, g, b, a } = shadowColor
  const [copied, copyToClipboard] = useCopyToClipboard()
  const [selectValue, setSelectValue] = useState('Button')
  const [selectedTab, setSelectedTab] = useState(1)

  useEffect(() => {
    if (svgValue && svgValue.includes('<svg')) {
      createSvgElement(
        shadowOffsetWidth,
        setShadowOffsetHeight,
        shadowRadius,
        r,
        g,
        b,
        a,
        svgValue,
      )
    }
  }, [svgValue])

  const shadowCodeReactNative = `
        shadowColor:${rgbToHex(r, g, b)},
        shadowOffset: {
            width: ${shadowOffsetWidth},
            height: ${shadowOffsetHeight},
        },
        shadowOpacity: ${shadowOpacity},
        shadowRadius: ${shadowRadius},
        elevation: ${shadowOffsetHeight * 2},
        `
  const shadowCodeFlutter = `
        BoxShadow(
          color: Color(0xFF${rgbToHexFlutter(r, g, b)}).withOpacity(${a}),
          offset: Offset(${shadowOffsetWidth}, ${shadowOffsetHeight}),
          blurRadius: ${shadowRadius},
          spreadRadius: ${shadowSpread},
        ),
      `

  const { key, value } = codeColor

  return (
    <div style={flexRowSpaceBetween}>
      <div className="editor__container">
        <div className="sidebar">
          <div className="slider__container">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 12,
              }}
              className="component__picker"
            >
              <h4>Component Menu</h4>
              <select
                onChange={(e) => setSelectValue(e.target.value)}
                className="component__select"
                name="components"
                id="components"
              >
                {componentData.map((comp, index) => {
                  return (
                    <option key={index} value={comp.name}>
                      {comp.name}
                    </option>
                  )
                })}
              </select>
              {/* <input
                            value={svgValue}
                            onChange={(e) => setSvgValue(e.target.value)}
                        /> */}
            </div>
            <h4>Shadow Controller</h4>
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 12,
              }}
            >
              <Slider
                label="Width"
                max={50}
                min={-50}
                value={shadowOffsetWidth}
                valueLabel={shadowOffsetWidth}
                onChange={(e) => setShadowOffsetWidth(e.target.value)}
              />
              <Slider
                label="Height"
                max={50}
                min={-50}
                value={shadowOffsetHeight}
                valueLabel={shadowOffsetHeight}
                onChange={(e) => setShadowOffsetHeight(e.target.value)}
              />

              <Slider
                label="Radius"
                max={50}
                min={0}
                value={shadowRadius}
                valueLabel={shadowRadius}
                onChange={(e) => setShadowRadius(e.target.value)}
              />

              <Slider
                label="Spread (Flutter)"
                max={50}
                min={-10}
                value={shadowSpread}
                valueLabel={shadowSpread}
                disabled={selectedTab === 1 ? true : false}
                onChange={(e) => setShadowSpread(e.target.value)}
              />
            </div>
          </div>
          <div className="color__container">
            <h4>Color and Opacity</h4>
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexDirection: 'column',
                marginTop: 12,
              }}
            >
              <RgbaColorPicker color={shadowColor} onChange={setShadowColor} />
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    gap: 4,
                  }}
                ></div>
                <div
                  className="color__card__container"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 4,
                    marginTop: 12,
                  }}
                >
                  {suggestedColors.map((color, index) => {
                    const { r, g, b, a } = color
                    return (
                      <div
                        className="color__card"
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
                          flexWrap: 'wrap',
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="code__bar">
          <div className="tab__bar">
            <div
              onClick={() => setSelectedTab(1)}
              className={`tab ${
                selectedTab === 1 ? 'tab__selected' : ''
              } react`}
            >
              React Native
            </div>
            <div
              onClick={() => setSelectedTab(2)}
              className={`tab ${
                selectedTab === 2 ? 'tab__selected' : ''
              } flutter`}
            >
              Flutter
            </div>
            <div
              className={`tab ${
                selectedTab === 3 ? 'tab__selected' : ''
              } swift`}
            >
              Swift
            </div>
          </div>
          <pre
            style={{
              background: '#161820',
              color: 'white',
              textAlign: 'left',
              padding: 24,
              borderRadius: 12,
              fontFamily: 'JetBrains Mono',
              fontWeight: '500',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
            }}
          >
            {selectedTab === 1 ? (
              <RNSection
                shadowOffsetWidth={shadowOffsetWidth}
                shadowOffsetHeight={shadowOffsetHeight}
                shadowColor={shadowColor}
                shadowRadius={shadowRadius}
              />
            ) : (
              <FlutterSection
                shadowOffsetWidth={shadowOffsetWidth}
                shadowOffsetHeight={shadowOffsetHeight}
                shadowColor={shadowColor}
                shadowRadius={shadowRadius}
                shadowSpread={shadowSpread}
              />
            )}

            <CopyButton
              onClick={() =>
                copyToClipboard(
                  selectedTab == 1 ? shadowCodeReactNative : shadowCodeFlutter,
                  DELAY,
                )
              }
              label={copied ? 'Copied!' : 'Copy'}
            />
          </pre>
        </div>
      </div>
      <div className="simulator__container">
        <div className="simulator__header">
          <div style={flexRowCentered}>
            <div className="circle close"></div>
            <div className="circle smaller"></div>
            <div className="circle full"></div>
          </div>
          <span>iPhone 11 Pro</span>
        </div>
        <div className="ios__screen">
          <div className="screen__top"></div>
          <div className="content">
            {/* <div style={{
                            width: 'auto',
                            height: 'auto',
                            padding: 0,
                            margin: 0,
                        }} id="svg-container"></div> */}

            {selectValue === 'Button' ? (
              <button
                style={{
                  boxShadow:
                    selectedTab === 2
                      ? `${shadowOffsetWidth}px 
                            ${shadowOffsetHeight}px 
                            ${shadowRadius}px 
                            ${shadowSpread}px
                            ${rgba(r, g, b, a)}`
                      : `${shadowOffsetWidth}px 
                            ${shadowOffsetHeight}px 
                            ${shadowRadius}px 
                            ${rgba(r, g, b, a)}`,
                }}
              >
                Get Started
              </button>
            ) : (
              <Card
                shadowOffsetWidth={shadowOffsetWidth}
                shadowOffsetHeight={shadowOffsetHeight}
                shadowRadius={shadowRadius}
                shadowColor={shadowColor}
                shadowSpread={shadowSpread}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShadowEditor
