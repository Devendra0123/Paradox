import React from 'react'
import './card.css';

import Image from '../../Assets/work culture.png'
const MiddleCard = () => {
  return (
    <div className='middleCard'>
        <img src={Image} alt='main_image' />
        <div>
            <h1>
                Features <br/> <span>Ought</span> to <br/> Partake
            </h1>
        </div>
    </div>
  )
}

export default MiddleCard