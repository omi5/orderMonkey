import React from 'react'
import './Section13.css'
import TopbarImage from '../../assets/images/section13Topbar.png'


const Section13 = () => {
  return (
    <>
        <div className="section13-wrapper">
            <div className="section13-container">
            <div className='section13-topbar-img'>
                        <img src={TopbarImage} alt="" />
                </div>
                <div className="section13-Slider-div">
                    {/* <Section13Slider /> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Section13