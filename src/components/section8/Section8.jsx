import React from 'react'
import './Section8.css'
import TopbarImage from '../../assets/images/whitebar1.png'
import Section8Slider from '../section8Slider/Section8Slider'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderData from '../data';

const Section8 = () => {
  return (
    <>
        <div className="section8-wrapper">
            <div className="section8-container">
                <div className='section8-topbar-img'>
                    <img src={TopbarImage} alt="" />
                </div>
                <div className='heading-div'>
                    <h1>Our customers with individual Selforder-Solutions</h1>
                </div>
                <div className="section8-slider-div">
                    <Slide>
                        {
                            sliderData.data.map((el)=>{
                               return <div className="slider-div">
                                <Section8Slider image={el.image} logo={el.logo} title={el.title} text={el.text} />
                                </div>
                            })
                        }
                        {/* <div className="slider-div">
                            <Section8Slider image={Image} logo={Logo} title='Burgermeister Switzerland' text={text} />
                        </div>
                        <div className="slider-div">
                        <Section8Slider image={Image} logo={Logo} title='Burgermeister Switzerland' text={text} />
                        </div> */}
                    </Slide>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Section8