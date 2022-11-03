import React from 'react'
import './bottomSection.css';
import Image from '../../Assets/nature.jpg';

const BottomSection = () => {
    return (
        <div className='bottomSection'>
            <img src={Image} alt='main_image' />
            <div className='try_it_section'>
                <div className='topDiv'>
                    <h2>
                        Every inspiration from nature
                    </h2>
                    <p>
                        Get started using our services with a 30-day free trial
                    </p>
                </div>

                <button>
                    Try it now
                </button>
            </div>
        </div>
    )
}

export default BottomSection