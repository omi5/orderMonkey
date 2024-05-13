import React from 'react'
import './Section13.css'
import TopbarImage from '../../assets/images/section13Topbar.png'
import Carousel from '../section13Carousel/Carousel'
// import Section13Slider from '../section13Slider/Section13Slider'



const Section13 = () => {
  return (
    <>
        <div className="section13-wrapper">
            <div className="section13-container">
            <div className='section13-topbar-img'>
                        <img src={TopbarImage} alt="" />
                </div>
                <div className="section13-Slider-div">
                    <h1>Follow us on social media</h1>
                    {/* <Section13Slider /> */}
                    <Carousel />
                  
                </div>
            </div>
        </div>
    </>
  )
}

export default Section13