import React from 'react'
import './Section6.css'
import Redbar from '../../assets/images/icon3.png'
import Menu from '../../assets/images/menu.png'
import Pos from '../../assets/images/pos.png'
import Print from '../../assets/images/print.png'
import Upsell from '../../assets/images/upsell.png'
import Marketting from '../../assets/images/marketting.png'
import Dashboard from '../../assets/images/dashboard.png'
import Whitebar from '../../assets/images/whitebar.png'
import Features from '../features/Features'

const Section6 = () => {
  return (
    <>
        <div className="section6-wrapper">
        <div className="section6-img-div">
                <img src={Redbar} alt="" />
            </div>
        </div>
        <div className="section6-container">
            <h1>More advantages of our solution!</h1>
            <div className="section6-upper-row-div">
            <Features icon={Menu} title='Menu Management' text='Easy content management on Webapp and Terminal via back office'/>
            <Features icon={Upsell} title='Upselling' text='Placement of additional upsell products within the order process'/>
            <Features icon={Marketting} title='Marketing' text='Advertising and promotion opportunities in the Webapp and Terminal'/>
            </div>
            <div className="section6-lower-row-div">
            <Features icon={Pos} title='POS & Payment' text='Direct integration into various POS systems'/>
            <Features icon={Dashboard} title='Dashboard & Reporting' text='Analysis of sales figures and statistics'/>
            <Features icon={Print} title='Print Management' text='Easy printing of orders in the kitchen and at the bar'/>
        </div>
        <div className='whitebar-img'>
            <img src={Whitebar} alt="" />
        </div>
        </div>
    </>
  )
}

export default Section6