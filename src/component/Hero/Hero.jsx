import React from 'react';
import './Hero.css';
import '../Others/Others.css';
import TopBar from '../TopBar/TopBar';
import { IoCallOutline } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';
import Blob from '../Blob/Blob';
import Heart from '../../assets/images/heart.png';
import Calories from '../../assets/images/calories.png';
import hero_image from '../../assets/images/home-img.png';

const Hero = () => {
  const transtition = {type: 'spring', duration: 3};

  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log('Done after 5 loops!');
  }

  return (
    <div className="hero">
      {/* Left side */}
      <div className="left-h">
        {/* <TopBar /> */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: '330px'}}
            whileInView={{left: '0px'}}
            transition={{ type: 'tween', duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          ></motion.div>
          <span>Transform your body, transform your life</span>
        </div>
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
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} pteFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            {/* <span>+1000</span> */}
            <span>
              <NumberCounter end={1000} start={900} delay={4} pteFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            {/* <span>+50</span> */}
            <span>
              <NumberCounter end={50} start={30} delay={4} pteFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-btn-1">
          <div className="glow-on-hover">
            <div className="button">
              <p className="btnText">READY</p>
              <div className="btnTwo">
                <p className="btnText2">GO</p>
              </div>
            </div>
          </div>
          <div className="glow-on-hover">
            <a href='/contact' className="btn-con">
            <div className="button">
              <p className="btnText">CONTACT US</p>
              <div className="btnTwo">
                <p className="btnText2-icon"><IoCallOutline/></p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Right side */}
      <div className="right-h">
        {/* <button className="btn-appearence">L/D</button> */}
        {/* <button className="btn">Join Now</button> */}
        <motion.img
        initial={{right: '-5rem'}}
        whileInView={{right: '8rem'}}
        transition={transtition}
        src={hero_image} alt="" className="hero-image" />
        <div className="blob-hero">
          <Blob/>
        </div>
        {/* <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
