import React from 'react'
import './Section12.css'
import TopbarImage from '../../assets/images/section11Topbar.png'
import Img4 from '../../assets/images/section12/img4.png'
import Img1 from '../../assets/images/section12/img1.png'
import Img2 from '../../assets/images/section12/img2.png'
import Img3 from '../../assets/images/section12/img3.png'


const Section12 = () => {
  return (
    <>
        <div className="section12-wrapper">
            <div className="section12-container">
                <div className='section12-topbar-img'>
                        <img src={TopbarImage} alt="" />
                </div>
                <div className="section12-img4">
                    <img src={Img4} alt="" />
                </div>
                <div className="section12-img1">
                    <img src={Img1} alt="" />
                </div>
                <div className="section12-img2">
                    <img src={Img2} alt="" />
                </div>
                <div className="section12-img3">
                    <img src={Img3} alt="" />
                </div>
                <div className="section12-img5">
                    <img src={Img1} alt="" />
                </div>
                <div className="section12-heading-div">
                    <h1>Are you ready for the monkey business?</h1>
                    <div className="section12-heading-btn-div">
                     <button className='section12-with-bg-color'>Request a Demo</button>
                     <button className='section12-without-bg-color'>Call</button>
                    </div>
                </div>
                <div className="form-div">
                    <form>
                        <div className="email-div">
                        <div className='input-div'>
                            <label>Surname*</label>
                            <input type="text" />
                        </div>
                        <div className='input-div'>
                            <label>E-mail*</label>
                            <input type="text" />
                        </div>
                        </div>
                        <div className="email-div">
                        <div className='input-div'>
                            <label>Telephone number*</label>
                            <input type="text" />
                        </div>
                        <div className='input-div'>
                            <label>remark</label>
                            <input type="text" />
                        </div>
                        </div>
                        <div className="send-btn-div">
                        <button className='section12-send-btn'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section12