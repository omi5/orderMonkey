import React from 'react';
import './SolutionSection.css'
import SolutionPercentage from '../solutionPercentage/SolutionPercentage';

const SolutionSection = () => {
  return (
    <>
        <div className='solutionSection-wrapper'>
           <div className="solutionSection-info">
           <h1>Our Selforder-Solution</h1>
            <div className="solutionSection-pera">
            <p>Why ORDERMONKEY? Powered by Selise and as a partner of Samsung, we convince with Swiss Quality and integrations to many POS-systems. 
               Thanks to many years of IT and software experience, 
               we also develop customizable Webapp and Terminal-Solutions on request, 
               which we offer you as the only partner in Switzerland from a single source.</p>
            </div>
           </div>
           <div className='percentage-div'>
                <SolutionPercentage  percentage='60' text='Increased customer loyalty'/>
                <SolutionPercentage  percentage='40' text='Increased efficiency due to short waiting times'/>
                <SolutionPercentage  percentage='30' text='More order volume through upselling opportunities'/>
           </div>
        </div>
    </>
  )
}

export default SolutionSection