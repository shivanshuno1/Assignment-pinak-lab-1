import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import FullWidthFooter from './Footer.jsx';
import ResponsiveNavbar from './Navigation_bar.jsx';

import ServicesFeaturesSection from './Services.jsx';
import HeroSection from './Hero.jsx';
import ContactFormSection from './Contact.jsx';
function App() {


  return (
    <>
      <ResponsiveNavbar/>
     <HeroSection/>
     <ServicesFeaturesSection/>
      <ContactFormSection/>
      <FullWidthFooter/>
      
    </>
  )
}

export default App
