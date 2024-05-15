import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const ProjectCard = ({heading}) => {
  return (
    <div>
      <div className="card-container">
      <div className='card-image'>
      </div>
      <div className='card-content'> 
      <h1>{heading}</h1>
      <div className='icons'>
      <FaCheckCircle className='icon'/> 
      <p>Office Meeting</p>
      </div>
      <div className='icons'>
      <FaCheckCircle className='icon'/> 
      <p>Working Time Call</p>
      </div>
      <div className='icons'>
      <FaCheckCircle className='icon'/> 
      <p>Come to place</p>
      </div>
      </div>
      <button className="button2">Contact Us </button>
          </div>
    </div>
  )
}

export default ProjectCard
