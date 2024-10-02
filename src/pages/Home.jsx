import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Event from '../components/Event'
import Theme from '../components/Theme'
import Gateways from '../components/Gateways'
import HeroImage from '../components/HeroImage'
import HeraTrial from '../events/HeraTrial'



const Home = () => {
  return (
    <div className=' bg-[#0f0f19] h-[100vh]'>
        <Navbar/>
        <Hero/>
        <Event/>
        <Theme/>
        <Gateways/>
        <Footer/>
    </div>
  )
}

export default Home