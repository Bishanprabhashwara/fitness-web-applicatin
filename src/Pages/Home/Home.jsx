import React from 'react'
// import Hero from '../../component/Hero/Hero'
import Reasons from '../../component/Reasons/Reasons'
import Programs from '../../component/Programs/Programs'
import Plans from '../../component/Plans/Plans'
import Testimonials from '../../component/Testimonials/Testimonials'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import TopBar from '../../component/TopBar/TopBar'
import Hero from '../../component/Hero/Hero'
import Speak from '../../component/Speak'

function Home() {
  return (
    <>
    <div className='home-Body'>
       <Hero/>
      <Speak/>
      <Reasons/>
      <Programs/>
      <Plans/>
      <Testimonials/>
      
      <Footer/>
      </div>
    </>
  )
}

export default Home
