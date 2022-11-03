import React from 'react'
import BottomCard from '../cards/BottomCard'
import MiddleCard from '../cards/MiddleCard'
import TopCard from '../cards/TopCard'
import './features.css'
const Features = () => {
  return (
    <div className='features'>
        <TopCard />
        <MiddleCard />
        <BottomCard />
    </div>
  )
}

export default Features