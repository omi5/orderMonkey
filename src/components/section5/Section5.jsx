import React from 'react'
import './Section5.css'
import Blackbar from '../../assets/images/icon2.png'
import Icon from '../../assets/images/icon1.png'
import Qr from '../../assets/images/qrCode.png'

const Section5 = () => {
  return (
    <>
        <div className="section5-wrapper">
            <div className="img-div">
                <img src={Blackbar} alt="" />
            </div>
         <div className="section5-container">
            <div className="icon-div">
                <img src={Icon} alt="Icon" />
            </div>
         <div className="section5-left-div">
          <div className='section5Info'>
                <h1>Effortless and efficient ordering with ORDERMONKEY’s QR-Webapp</h1>
                <p>With ORDERMONKEY's QR-Webapp, we offer you a seamless and efficient way 
                    to place orders while enhancing the customer experience. The simple process 
                    allows customers to place orders and make payments effortlessly without the 
                    need for tedious registration, simply by scanning the QR-Code..</p>
                <p>Ready for the next step toward success? Request a free demo 
                    version today and reshape your future with ORDERMONKEY's QR-Webapp.
                     Your success is just one click away!
                </p> 
                  
            </div>
            <div className='section5-btn-div'>
                <button className='section5-with-bg-color'>Try the App</button>
                <button className='section5-without-bg-color'>Request a Demo</button>
            </div>
          </div>
          <div className="section5-middle-div">
            <img src={Qr} alt="" />
          </div>
          <div className="section5-right-div">
            <div className="section5-right-div-leftside">
               <div>
                    <h2>No registration required</h2>
                    <p>Our user-friendly QR-Webapp makes ordering as convenient as possible, 
                        eliminating the need for time consuming registrations or passwords.</p>
               </div>
               <div className='mt'>
                    <h2>Order from anywhere</h2>
                    <p>Provides a smooth and efficient way to place orders while enhancing the customer experience. 
                        The easy-to-use app allows customers to order without the hassle of registration by simply scanning the QR-code.</p>
               </div>
               <div className='mt'>
                    <h2>Dine-In, Pre-Order & Take Away</h2>
                    <p>Easily configure different order types that align with your unique restaurant concept. Decide which notifications should be activated based on the order type,
                         creating a tailored ordering solution for your restaurant.</p>
               </div>
            </div>
            
            <div className="section5-right-div-rightside">
                 <div>
                     <h2>Customer Notifications</h2>
                    <p>Keep your customers informed by sending them SMS, E-Mail, or name notifications. 
                        The order receipt will be delivered in their preferred format.</p>
                 </div>
                 <div className='mt'>
                     <h2>Integration with delivery services</h2>
                    <p>Our QR-Webapp can be seamlessly integrated with delivery 
                        services to expand the reach of your restaurant.</p>
                 </div>
                 <div className='mt'>
                     <h2>Payment and POS Integration</h2>
                    <p>Easily integrate your preferred payment
                        and POS systems to ensure a seamless transaction process.</p>
                 </div>
            </div>
          </div>
         </div>
        </div>
    </>
  )
}

export default Section5