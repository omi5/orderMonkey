import React from 'react'
import Image from '../../assets/images/middleDiv.png'
import './Section4.css'

const Section4 = () => {
  return (
    <>
        <div className="section4-wrapper">
         <div className="section4Container">
         <div className="left-div">
          <div className='section4Info'>
                <h1>Revolutionize your Restaurant with ORDERMONKEY's Selforder-Terminal</h1>
                <p>In today's digital era, innovative restaurant management is of paramount 
                    importance. ORDERMONKEY's Selforder-Terminal provides a powerful solution 
                    to enhance your restaurant's success, optimize the customer experience, 
                    and address personnel shortages simultaneously.</p>
                <p>ORDERMONKEY's Selforder-Terminal simplifies the ordering process significantly 
                for your customers. With a simple touch of the terminal screen, customers gain 
                immediate access to the extensive menu. This allows orders to be effortlessly 
                placed and paid for without time-consuming delays.
                </p> 
                <p>Ready for the next step toward success? Request a free demo version today and 
                redefine your future with ORDERMONKEY's Selforder-Terminal. 
                Your success is just one click away!</p>   
            </div>
            <div className='section4-btn-div'>
                <button className='section4-with-bg-color'>Request a Demo</button>
                <button className='section4-without-bg-color'>Get In Touch</button>
            </div>
          </div>
          <div className="middle-div">
            <img src={Image} alt="" />
          </div>
          <div className="right-div">
            <div className="right-div-leftside">
               <div>
                    <h2>Custom Branding & Product Placement</h2>
                    <p>Tailor the terminal to your brand identity by designing colors, 
                        visuals, and logos according to your preferences.</p>
               </div>
               <div className='mt'>
                    <h2>Self-Checkout & EAN Scan</h2>
                    <p>Enables EAN code scanning, opening up various applications in retail and 
                        self-service checkout contexts, offering flexibility across different operational settings.</p>
               </div>
               <div className='mt'>
                    <h2>Upselling</h2>
                    <p>Boost your revenue by creating and presenting targeted upselling offers.</p>
               </div>
            </div>
            
            <div className="right-div-rightside">
                 <div>
                     <h2>Payment and POS-Integration</h2>
                    <p>Seamlessly integrate your payment system through the payment terminal, directly integrating with your POS system.</p>
                 </div>
                 <div className='mt'>
                     <h2>Digital Menu</h2>
                    <p>Present an impressive digital menu with large-format images and a distinctive display presence.
                         It allows for individualized menu customization and creates space for unique branding.</p>
                 </div>
            </div>
          </div>
         </div>

        </div>
    </>
  )
}

export default Section4