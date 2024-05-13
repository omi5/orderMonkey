import React, { useState }from 'react'
import YoutubeLogo from '../../assets/images/youtubeLogo.png'

import './Section3.css'

const Section3 = () => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
        <div className='section3-wrapper'>
           <div className="section3-info">
           <h1>Delight Customers & <br />
                Boost Revenue</h1>
            <div className="section3-pera">
            <p>Digital Ordering with Selforder-Terminal & QR-Webapp</p>
            </div>
           </div>
           <div className='video-wrapper'>
           <div className={`youtubeLogo-div ${isHidden ? 'hidden' : ''}`} onClick={toggleVisibility}>
           <img src={YoutubeLogo} alt="" />
           </div>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/OILskPEnxg4?si=laKUpbqVlmbsF_U9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>
           
        </div>
    </>
  )
}

export default Section3