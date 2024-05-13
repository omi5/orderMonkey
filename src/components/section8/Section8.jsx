import React from 'react'
import './Section8.css'
import TopbarImage from '../../assets/images/whitebar1.png'
import Section8Slider from '../section8Slider/Section8Slider'
import Image from '../../assets/images/switzerlandSliderImage.png'
import Logo from '../../assets/images/burgerMeister.png'

const text = 'Taking dining to the next level with ORDERMONKEY, Burgermeister guests can experience faster service with dishes crafted to perfection and tailored to their unique tastes. Welcome to the future, where precision meets indulgence!'

const Section8 = () => {
  return (
    <>
        <div className="section8-wrapper">
            <div className="section8-container">
                <div className='section8-topbar-img'>
                    <img src={TopbarImage} alt="" />
                </div>
                <div className="slider-div">
                    <Section8Slider image={Image} logo={Logo} title='Burgermeister Switzerland' text={text} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Section8