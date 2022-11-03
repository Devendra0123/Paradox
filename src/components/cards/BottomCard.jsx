import React from 'react'
import './card.css';
import Image_one from '../../Assets/1542298796.jpg';
import Image_two from '../../Assets/earth.png';

const BottomCard = () => {
  return (
    <div className='bottomCard'>
        <img src={Image_one} alt='main_image' />
        <img src={Image_two} alt='main_image' />
    </div>
  )
}

export default BottomCard