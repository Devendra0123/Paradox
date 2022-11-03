import React from 'react'
import Image from '../../Assets/original.jpg';

import './card.css';

const TopCard = () => {
    return (
        <div className='topCard'>
            <h1>
                Building the future
            </h1>
            <img src={Image} alt='main_image' />
        </div>
    )
}

export default TopCard