import React from 'react'
import './Footer.css'
import TopbarImage from '../../assets/images/footerTopbar.png'
import FooterLogo from '../../assets/images/orderMonkeyWhiteLogo.png'
import Insta from '../../assets/images/insta.png'
import Linkedin from '../../assets/images/linkedin.png'
import Facebook from '../../assets/images/facebook.png'

const Footer = () => {
  return (
    <>
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className='footer-topbar-img'>
                    <img src={TopbarImage} alt="" />
                </div>
                <div className="footer-div">
                    <div className="footer-logo-div ">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className="footer-company-div footer ">
                        <h3>Company</h3>
                        <a href="#"><p>Careers</p></a>
                        <a href="#"><p>Blogs</p></a>
                    </div>
                    <div className="footer-support-div footer">
                        <h3>Support</h3>
                        <a href="#"><p>kiosk-support@selise.ch</p></a>
                        <a href="#"><p>+41 43 215 25 65</p></a>
                    </div>
                    <div className="footer-location-div footer">
                        <h3>Location</h3>
                        <a href="#"><p>Selise Group AG <br />
                                        The Circle 37, 8058 Zurich
                                        Airport Zurich</p></a>
                    </div>
                    <div className="footer-connect-div footer">
                        <h3>Let's Connect</h3>
                        <div className='footer-socialIcon-div'>
                        <div>
                            <img src={Insta} alt="" />
                        </div>
                        <div>
                            <img src={Linkedin} alt="" />
                        </div>
                        <div className='facebook-icon'>
                            <img src={Facebook} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight-div">
                    <hr />
                    <div className="copyRightInner-div">
                        <div className='footer-left-div'>
                            <div>
                                <p>Cookie preferences</p>
                            </div>
                            <div>
                                <p><a href="">Privacy policy</a></p>
                            </div>
                            <div>
                                <p>Terms of use</p>
                            </div>
                        </div>
                        <div>
                            <p>Copyright © 2024 Selise. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer