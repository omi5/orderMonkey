import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroImg from '../../assets/images/hero.png'
import HeroImg1 from '../../assets/images/egg.png'
import ComaLeft from '../../assets/images/comaLeft.png'
import ComaRight from '../../assets/images/comaRight.png'
import FooterHero from '../../assets/images/footerHero.png'
import Pos from '../../assets/images/orderPos.png'
import Food from '../../assets/images/plateWithFood.png'

import './HeroSection.css'
import HeroSectionInfo from '../heroSectionInfo/HeroSectionInfo'
const HeroSection = () => {
  return (
    <>
        <div className='hero-section'>
          <div className='z-index'>
          <Navbar />
          </div>
          <div className="heading">
          <img className='comaLeft' src={ComaLeft} alt="comaLeft" />
            <h1>The New Way
              <br />To Order Food
              <br /> And Drinks
            </h1>
            <img className='comaRight' src={ComaRight} alt="comaRight" />
          </div>
          <div className='heroImg-div'>
            <img src={HeroImg} alt="" />
          </div>
          <div className="heroImg1">
            <img src={HeroImg1} alt="" />
          </div>
            <div className='footer-hero-section'>
            <img src={FooterHero} alt="FooterHero" />
          </div>
          <div className="posHero-section">
              <img src={Pos} alt="pos" />
          </div>
          <div className="hero-plateWithFood-section">
            <img src={Food} alt="food" />
          </div>
          <div className="heroInfo-div">
            <HeroSectionInfo />
          </div>
        </div>
    </>
  )
}

export default HeroSection