import React from 'react'
import './Section11.css'
import Icon1 from '../../assets/images/section11Icon1.png'
import Icon2 from '../../assets/images/section11Icon2.png'

const Section11 = () => {
  return (
    <>
        <div className="section11-wrapper">
            <div className="section11-container">
              <div className='section11Icon1'>
                  <img src={Icon1} alt="" />
              </div>
              <div className='section11Icon2'>
                  <img src={Icon2} alt="" />
              </div>
                <h1>frequently asked Questions</h1>
                <div className='section11-div'>
                  <div className='section11-div-Info'>
                      <p>What is ordermonkey?</p>
                  </div>
                  <div className='section11-div-Info'>
                      <p>How can ordermonkey help business?</p>
                  </div>
                  <div className='section11-div-Info'>
                      <p>can ordermonkey also be used without integration into a pos system?</p>
                  </div>
                  <div className='section11-div-Info'>
                      <p>which pos system can i use ordermonkey with?</p>
                  </div>
                  <div className='section11-div-Info'>
                      <p>when is ordermonkey support available?</p>
                  </div>
                </div>
                <div className='section11-btn-div'>
                <button className='section11-without-bg-color'>More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section11