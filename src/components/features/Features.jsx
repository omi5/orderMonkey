import React from 'react'
import './Features.css'

const Features = ({icon,title,text}) => {
  return (
   <>
    <div className='features-wrapper'>
        <div className="features-img-div">
            <img src={icon} alt="" />
        </div>
        <div className="features-text-div">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
   </>
  )
}

export default Features