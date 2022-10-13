import React from 'react'
import Carousel from 'better-react-carousel'
import './Gallery.css';

export default function Gallery(){
  return (
    <div className='items-container'> 
    <Carousel className='items' breakpoint={800} cols={2} rows={1} gap={0} loop>
      <Carousel.Item>
        <img src='../assets/fire.jpg' alt='camping' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='../assets/AZ.jpg' alt='desert' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='../assets/jaco.jpg' alt='hostle' />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}