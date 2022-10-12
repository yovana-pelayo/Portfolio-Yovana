import React from 'react'
import Carousel from 'better-react-carousel'

export default function Gallery(){
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src='../assets/fire.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src='../assets/AZ.jpg'/>
      </Carousel.Item>
     
    </Carousel>
  )
}