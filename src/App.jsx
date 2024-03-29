import './App.css'
import Home from './pages/Home'
import MacOS from './components/MacOS';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query'
import ShadowsSection from './pages/ShadowsSection';
import Popup from './components/Popup';

function App() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }} className="App">
      <Home />
      <ShadowsSection />
      {matches ? <MacOS /> : <Popup />}
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
