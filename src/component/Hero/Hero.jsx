import React from 'react'
import './Hero.css'
import '../Others/Others.css'
import TopBar from '../TopBar/TopBar'

// import images
import hero_image from '../../assets/images/home-img.png'
// import hero_image_back from '../../assets/images/hero_image_back.png'
import Heart from '../../assets/images/heart.png'
import Calories from '../../assets/images/calories.png'
import { IoCallOutline } from "react-icons/io5";

import NumberCounter from 'number-counter';
import { motion } from 'framer-motion'
import Blob from '../Blob/Blob'

import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  const transtition = {type: 'spring', duration: 3};

  const handleType = (count) => {
    console.log(count);
}
  const handleDone = () => {
    console.log('Done after 5 loops!')
  }


  return (
    <div className="hero">
      
{/* hero left side open */}
        <div className="left-h">
            <TopBar/>
  {/* the best ad */}
            <div className="the-best-ad">
              <motion.div
                initial={{left: '330px'}}
                whileInView={{left: '0px'}}
                transition={{ type: 'tween', duration: 5, repeat: Infinity, repeatType: 'mirror' }}
              ></motion.div>
              <span>Transform your body, transform your life</span>
            </div>

  {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>I
                  <Typewriter
                      words={['deal body']}
                      loop={Infinity}
                      // cursor
                      // cursorStyle='_'
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={2000}
                      onLoopDone={handleDone}
                      onType={handleType}
                    />
                </span>
              </div>
              <div>
                <span>
                  Embark on a journey with us towards a healthier, stronger version of yourself. 
                  {/* <br/>Here, we are dedicated to assisting you in sculpting and enhancing your ideal physique, enabling you to live life to the fullest. */}
                </span>
              </div>
            </div>

  {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay={4} pteFix="+" />
                </span>
                <span>expert coachs</span>
              </div>
              <div>
                <span>+1000</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
            </div>
  {/* hero buttens */}
            <div className="hero-btn-1">
              {/* <button className="btn">Get Start</button>
              <button className="btn">Learn More</button> */}

                <div class="glow-on-hover">
                    <div class="button">
                        <p class="btnText">READY</p>
                        <div class="btnTwo">
                          <p class="btnText2">GO</p>
                        </div>
                    </div>
                </div>
                <div class="glow-on-hover">
                    <div class="button">
                        <p class="btnText">CONTACT US</p>
                        <div class="btnTwo">
                          <p class="btnText2-icon"><IoCallOutline/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* hero right side open */}
        <div className="right-h">
          {/* <div className="trangle"></div> */}

          <button className="btn-appearence">L/D</button>
          <button className="btn">Join Now</button>

          {/* <div className="hart-rate">
            <img src={Heart} alt="" />
            <span>Hart Rate</span><span>116 bpm</span>
          </div> */}

  {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          {/* <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transtition}
          src={hero_image} alt="" className="hero-image" /> */}
          <div className="blob-hero">
              <Blob/>
          </div>
          
          

 {/* calories */}
          {/* <div className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div> */}

        </div>
    </div>
  )
}

export default Hero