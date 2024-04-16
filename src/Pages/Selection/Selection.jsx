// BookStoreCarousel.js

import React, { useState,useEffect } from 'react';
import Swiper from 'swiper';
import './Selection.css';
import image1 from './images/image0_0.jpg'
import image2 from './images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png'
import image3 from './images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png'




const Selection = () => {
const [isActive,setActive]=useState(false);
const toggleStyle = () => {
    setActive(!isActive);
  };
  const dynamicClass = isActive ? 'active' : 'inactive';
    const schedules = [image1, image2, image3];
   
   
   const [mySchedule, setMyProfession] = useState("");
   const redirectToAnotherPage = (link) => {
    {mySchedule === image1 ? (
        window.location.href = 'https://www.w3schools.com/'
        
    ):(
        <p></p>
    )
}
{mySchedule === image2 ? (
    window.location.href = 'https://ekel.kln.ac.lk'
):(
    <p></p>
)}
{mySchedule ===  image3 ? (
    window.location.href = 'https://chat.openai.com/'
):(
    <p></p>
)}
    
  };
  return (
    <>
    <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2> &#160;&#160;&#160;Select the schedule you like the most</h2>
                    <br />
                    <div className='border'></div>
                    <div
                        className="btn-group "
                        role="group"
                        aria-label="Basic example"
                        
                    >
                        
                        {schedules.map(schedule => (
                            <>
                            
                            <button
                                type="button"
                                key={schedule}
                                className={"btn btn-light border-dark"}
                                onClick={() =>redirectToAnotherPage(schedule)}
                                onMouseEnter={() => setMyProfession(schedule)} 
                                                             
                            >
                                
                                <img src={schedule} width="100px" height="200px" className="img-thumbnail"/>
                                
                            </button>
                            </>
                            
                        ))}
                        
                    </div>
                </div>
                <div className="col text-center discription">
                    <p></p>
                    <p>
                        {mySchedule === image1 ? (
                            <p className='description2'><img src= {image1} width="75%" height="200px" className="img-thumbnail"/><br/>Greetings! Daily routine: Exercise, work/study, meals, creative break, tasks, relax.</p>
                            
                        ):(
                            <p></p>
                        )}
                        {mySchedule === image2 ? (
                            <p className='description2'><img src= {image2} width="75%" height="200px" className="img-thumbnail"/><br/>Intermediate routines offer enhanced structure with dedicated time blocks, fostering productivity, well-rounded activities, and improved balance.</p>
                        ):(
                            <p></p>
                        )}
                        {mySchedule ===  image3 ? (
                            <p className='description2'><img src= {image3} width="75%" height="200px" className="img-thumbnail"/><br/>Welcome! Advanced schedule integrates strategic planning, specialized activities, skill development, reflection, fostering peak performance, and well-being</p>
                        ):(
                            <p></p>
                        )}
                        
                    </p>
                    
                </div>
                <div className="col text-center move-div">
                    <p>
                        {mySchedule === image1 ? (
                            <p className='animated-text'>Basic</p>
                            
                        ):(
                            <p></p>
                        )}
                        {mySchedule === image1 ? (
                            <p className='animated-text'>Intermediate</p>
                        ):(
                            <p></p>
                        )}
                        {mySchedule ===  image3 ? (
                            <p className='animated-text'>Advanced</p>
                        ):(
                            <p></p>
                        )}
                        
                    </p>
                    
                </div>
            
    </div>
<div className='trapezoid'>

</div>
    </>
  )
};



export default Selection;
