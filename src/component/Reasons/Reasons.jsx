import React from 'react'
import './Reasons.css'

import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import nb from '../../assets/images/nb.png'
import adidas from '../../assets/images/adidas.png'
import nike from '../../assets/images/nike.png'
import tick from '../../assets/images/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Some resons</span>

            <div>
                <span className="stroke-text">why </span>
                <span>choose us?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>OVER 140+ EXPERT COARCHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                <span className='partners-title'>
                    OUR PARTNERS
                </span>

                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons