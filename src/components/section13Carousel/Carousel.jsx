import React from 'react'
import {motion} from 'framer-motion';
import { useRef,useEffect,useState } from 'react';
import './Carousel.css'
import images from '../../storage/CarouselData'

const Carousel = () => {
    const [width,setWidth] = useState(0)
    const carousel = useRef()
    useEffect(()=>{
        console.log(carousel.current.scrollWidth);
        setWidth(carousel.current.scrollWidth  - carousel.current.offsetWidth)
    },[])
  return (
   <>
    <div className="carousel-wrapper">
        <div className="carousel-container">
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right:0 ,left: -width}} className='inner-carousel'>
                    {images.map(image=>{
                        return (
                            <motion.div  className='item'>
                                <img src={image} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    </div>

   </>
  )
}

export default Carousel