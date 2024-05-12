import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/orderMonkeyLogo.png'
import Insta from '../../assets/images/insta.png'
import Linkedin from '../../assets/images/linkedin.png'
import Facebook from '../../assets/images/facebook.png'
import Phone from '../../assets/images/phone.png'
import Button from '../button/Button';



const Navbar = () => {
  const list = ['Product','Features','Partners','Customers','Pricing','Blogs']
  return (
    <div className='navbar-wrapper'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-list">
            <ul>
                {list.map(el=>{
                    return <li key={el}><a href="#">{el}</a></li>; 
                })}    
            </ul>
        </div>
        <div className="social-icon">
            <div>
                <img src={Insta} alt="" />
            </div>
            <div>
                <img src={Linkedin} alt="" />
            </div>
            <div className='facebook-icon'>
                <img src={Facebook} alt="" />
            </div>
            <div className='line-div'></div>
            <div>
                <img src={Phone} alt="" />
            </div>
        </div>
        <div className="button-div">
            <Button withBgColor={false} >Get in Touch</Button>
            <Button withBgColor={true} >Request a Demo</Button>
        </div>
        <div className='language-wrapper'>
            <a href="#"><p>AE</p></a>
            <a href="#"><p>EN</p></a>
            <a href="#"><p>DE</p></a>
        </div>
    </div>
  )
}

export default Navbar