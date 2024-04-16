import React from 'react'
import './Programs.css'
import {programsData} from '../../assets/data/programsData'


const Programs = () => {
  return (
        <div className="Programs" id="programs">
        {/* header */}
                <div className="programs-header">
                    <span class="stroke-text">Explore our</span>
                    <span>Programs</span>
                    <span class="stroke-text">to shape you</span>
                </div>

                <div className="program-categories">
                    {programsData.map((program) =>(
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                        </div>
                    ))}
                </div>

        </div>
  )
}

export default Programs