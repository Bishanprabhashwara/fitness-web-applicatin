import React from 'react'
import Timer from '../component/Timer/Timer'
import Clock from '../component/Clock/Clock'
import './Running.css'
import Map from '../component/Map/Map'
import RunningSpeedTracker from '../component/RunningSpeedTracker/RunningSpeedTracker'
import WeatherDisplay from '../component/Weather/WeatherDisplay'

const Running = () => {
  return (
    <>
    <div className='row'>
    <div className='clock col-lg-6 col-md-12'>
        <Clock/>
    </div>
    <div className='timer col-lg-6 col-md-12'>
        <Timer/>
    </div>
    <div className='SpeedTracker col-lg-6 col-md-12'>
        <RunningSpeedTracker/>
        
    </div>
    <div className='map col-lg-6 col-md-12'>
        <Map/>
        </div> 
        <div className='weather col-lg-6 col-md-12'>
       <WeatherDisplay/>
           </div> 
    </div>
    </>
    
  )
}

export default Running