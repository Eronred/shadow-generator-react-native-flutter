import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Slider from './components/Slider'
import { SketchPicker } from 'react-color'
import { RgbaColorPicker } from "react-colorful";
import { rgba } from 'polished'
import Home from './pages/Home'
import { rgbToHex } from './utils/utils'
import ShadowEditor from './pages/ShadowEditor'
import MacOS from './components/MacOS';


function App() {

  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    }} className="App">
      <Home/>
      <MacOS/>
    </div>
  )
}

export default App
