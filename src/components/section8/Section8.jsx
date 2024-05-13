import React from 'react'
import './Section8.css'
import TopbarImage from '../../assets/images/whitebar1.png'

const Section8 = () => {
  return (
    <>
        <div className="section8-wrapper">
            <div className="section8-container">
                <div className='section8-topbar-img'>
                    <img src={TopbarImage} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Section8