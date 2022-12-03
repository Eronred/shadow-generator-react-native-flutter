import './App.css'
import Home from './pages/Home'
import MacOS from './components/MacOS';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';

function App() {

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }} className="App">
      <Home />
      <MacOS />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
