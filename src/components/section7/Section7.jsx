import React from 'react'
import './Section7.css'
import Section7Slider from '../section7Slider/Section7Slider'
import WhitebarImage from '../../assets/images/whitebar1.png'

const Section7 = () => {
  return (
    <>
        <div className="section7-wrapper">
            <div className="section7-container">
                <Section7Slider />
            </div>
           
        </div>
    </>
  )
}

export default Section7