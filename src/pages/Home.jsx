import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' bg-[#0f0f19] h-[100vh]'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home