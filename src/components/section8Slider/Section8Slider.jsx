import React from 'react'
import './Section8Slider.css'


const Section8Slider = ({image,title,text,logo}) => {
  return (
    <>
        <div className="section8Slider-wrapper">
            <div className="section8Slider-container">
               
                <div className="section8Slider-img">
                    <img src={image} alt="" />
                </div>
                <div className="section8SliderInfo">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <div className='info-img'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section8Slider