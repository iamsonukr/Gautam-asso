import React from 'react'
import '../Project1/Projects.css'
import image1 from "../../assets/Projects/img1.jpg";
import ProjectCard from '../../Component/ProjectCard';
export default function () {
  return (
    <div className='full-div'>
      <div className="Header">
        <div className="left">
          <p>PERFECT PARTNER</p>
          <h1>WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN</h1>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus non similique est  voluptatum sit harum autem, nihil
            natus veniam necessitatibus adipisci odio quidem architecto tempore
            nisi ut rem odit maxime? </h3>
          <button className="button">PORTFOLIO</button>
        </div>
        <div className="right">
          <div className="div1">
            <div className="img1">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="div2">
            <div className="img1">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="div3">
            <div className="img1">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='grid-container'>
        <ProjectCard heading={'PRE MADE HOME CONSULTATION'} />
        <ProjectCard heading={'INTERIOR DESIGN REPAIR'} />
        <ProjectCard heading={'EXTERIOR FRAME DESIGN'} />
        <ProjectCard heading={'FULL HOUSE DECORACTION'} />
        <ProjectCard heading={'PRE BUILDING HOME DESIGN'} />
        <ProjectCard heading={'FULL PACKAGE DECORACTION'} />
      </div>
      {/* <button className="button3">Load More </button> */}
    </div>
  )
}

