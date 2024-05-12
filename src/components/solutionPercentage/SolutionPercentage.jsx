import React from 'react'
import './SolutionPercentage.css'

const SolutionPercentage = ({percentage,text}) => {
  return (
   <>
     <div className='solutionPercentage-wrapper'>
        <h1>+ {percentage}%</h1>
        <p>{text}</p>
     </div>
   </>
  )
}

export default SolutionPercentage