import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import SectionOne from './Components/Home/SectionOne'
import SectionTwo from './Components/Home/SectionTwo'
import HeadFooter from './Components/Home/HeadFooter'
import Footer from './Components/Footer'
import ScrollButton from './Components/ScrollButton'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <ScrollButton />
      <SectionOne />
      <SectionTwo />
      <HeadFooter />
      <Footer />
    </div>
  )
}

export default App
