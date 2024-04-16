import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../assets/data/testimonialsData'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'


const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span className='left-span-name'>
                    {testimonialsData[selected].name}
                </span> {" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>

            <img src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img src={leftArrow} alt="" 
                    onClick={() => {
                        selected === 0
                        ? setSelected(tLength-1)
                        : setSelected((prev) => prev - 1);
                    }}
                />
                <img src={rightArrow} alt="" 
                    onClick={() => {
                        selected === 0
                        ? setSelected(tLength-1)
                        : setSelected((prev) => prev + 1);
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials