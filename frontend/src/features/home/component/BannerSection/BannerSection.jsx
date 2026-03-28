import React from 'react'
import './BannerSection.css'
import BannerImg from '../../../../assets/website/imgi_9_Group-1000012600-1.webp'

const BannerSection = () => {
  return (
    <div className='banner-container'>
        <div className='banner-left'>
            <div className='banner-left-content'>
              <h2 className='banner-left-title-1'>Best Quality</h2>
              <h2 className='banner-left-title-2'>Four Cheese Heaven</h2>
              <a href="" className='banner-left-button'>Order Now</a>
            </div>
            <img src={BannerImg} alt="Banner Left" />
        </div>

        <div className='banner-right'>
           <div className='banner-right-content'>
              <h2>Premium Quality</h2>
              <h2>Meat Lover's Pizzas</h2>
              <a href="">Order Now</a>
           </div>

           <img src={BannerImg} alt="Banner Right" />
        </div>
    </div>
  )
}

export default BannerSection