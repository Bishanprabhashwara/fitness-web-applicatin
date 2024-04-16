import React from 'react'
// import Hero from '../../component/Hero/Hero'
import Reasons from '../../component/Reasons/Reasons'
import Programs from '../../component/Programs/Programs'
import Plans from '../../component/Plans/Plans'
import Testimonials from '../../component/Testimonials/Testimonials'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import TopBar from '../../component/TopBar/TopBar'

function Home() {
  return (
    <>
       {/* <Hero/>  */}
  
      <Reasons/>
      <Programs/>
      <Plans/>
      <Testimonials/>
      
      <Footer/>
      
    </>
  )
}

export default Home