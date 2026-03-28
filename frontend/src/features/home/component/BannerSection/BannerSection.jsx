import React from 'react'
import './BannerSection.css'
import BannerImg from '../../../../assets/website/imgi_9_Group-1000012600-1.webp'

const BannerSection = () => {
  return (
    <div className='banner-container'>
        <div className='banner-left'>
            <div className='banner-left-content'>
              <h2></h2>
            </div>
            <img src={BannerImg} alt="Banner Left" />
        </div>

        <div className='banner-right'>
           <div className='banner-right-content'>

           </div>

           <img src={BannerImg} alt="Banner Right" />
        </div>
    </div>
  )
}

export default BannerSection