import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/Navigation/Navigation.jsx'
import HeroHeader from './components/Hero/HeroHeader.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <HeroHeader/>
    <Footer/>
  </React.StrictMode>,
)
