import React from 'react'
import './Section9.css'
import TopbarImage from '../../assets/images/redWhitebar.png'
import OrderPng from '../../assets/images/orderHere.png'
import Section9Slider from '../section9Slider/Section9Slider'
import Data from '../../storage/Section9LogoData'
import PartnerschaftenData2 from '../../storage/PartnerschaftenData2'
import paymentPartnerData from '../../storage/paymentPartnerData'
import posPartner from '../../storage/posPartners'
// import {PartnerschaftenData1,PartnerschaftenData2} from '../../storage/Section9LogoData'

const Section9 = () => {
    console.log(Data);
  return (
    <>
        <div className="section9-wrapper">
            <div className="section9-container">
                <div className='section9-topbar-img'>
                    <img src={TopbarImage} alt="" />
                </div>
                <h1>Our Partners & Integrations</h1>
                <div className="section9-partnerInfo-div">
                    <div className="section9-left-div">
                        <img src={OrderPng} alt="" />
                    </div>
                    <div className="section9-right-div">
                        <div className='section9-inner-div1'>
                            <h2>Partnerschaften</h2>
                            <div className="section9-inner-div-logo">
                                <div className='section9SliderHeight'>
                                <Section9Slider row1={Data}/>
                                </div>
                                <div className='section9SliderHeight section9SliderMt'>
                                <Section9Slider row1={PartnerschaftenData2}/>
                                </div>
                            </div>
                            <hr className='section9-hr' />
                            <h2>Payment Partner</h2>
                            <div className="section9-inner-div2-logo">
                                <div className='section9SliderHeight'>
                                <Section9Slider row1={paymentPartnerData}/>
                                </div>   
                            </div>
                            <hr className='section9-hr'/>
                            <h2>POS Partner</h2>
                            <div className="section9-inner-div3-logo">
                                <div className='section9SliderHeight'>
                                <Section9Slider row1={posPartner.part1}/>
                                </div>  
                                <div className='section9SliderHeight section9SliderMt'>
                                <Section9Slider row1={posPartner.part2}/>
                                </div>
                                <div className='section9SliderHeight section9SliderMt'>
                                <Section9Slider row1={posPartner.part3}/>
                                </div>
                                <div className='section9SliderHeight section9SliderMt'>
                                <Section9Slider row1={posPartner.part4}/>
                                </div> 
                                <div className='section9SliderHeight section9SliderMt'>
                                <Section9Slider row1={posPartner.part5}/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section9