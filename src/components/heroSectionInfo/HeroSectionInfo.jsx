import React from 'react'
import './HeroSectionInfo.css'

const HeroSectionInfo = () => {
  return (
    <>
        <div className='heroSectionInfo-wrapper'>
            <div className="info-div">
            <h2>Our Selforder-Solution <br /> and QR-Webapp</h2>
            <p>The food service industry is evolving. The latest
               technologies not only enable increased sales and
               reductions in operating costs, but also more satisfied
               customers. Our Selforder-Solution allows you to
               increase sales while still putting your customers first. An
               intuitive, fast & efficient customer experience journey.</p>
            </div>
            <div className='heroSectionInfo-btn-div'>
                <button className='without-bg-color'>Get In Touch</button>
                <button className='with-bg-color'>Request a Demo</button>
            </div>
        </div>

    </>
  )
}

export default HeroSectionInfo