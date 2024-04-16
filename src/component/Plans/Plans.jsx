import React from 'react'
import './Plans.css'
import { useState } from 'react'
import {plansData} from '../../assets/data/plansData'
import whiteTick from '../../assets/images/whiteTick.png'
import { useCookies } from 'react-cookie';

const Plans = () => {
    const [Paymentcookies, setpaymentCookie, removeCookie] = useCookies(['option']);
    const [value, setValue] = useState('');
    const handleClick = () => {
        console.log(value);
        window.location.href = '/payment';
        
      };
  return (
    <div className="plans-cointainer">
        <div className="programs-header" id='plan-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i} onClick={() => {setpaymentCookie('option', plan.name);handleClick()}}>
                    
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((features, i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{features}</span>
                        </div>
                    ))}
                    </div>

                    <div>
                        <span>See more benifits -</span>
                    </div>
                    <button className="btn plain-btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans