import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import HeroSection from '../component/HeroSection/HeroSection'
import FeatureSection from '../component/FeatureSection/FeatureSection'
import BannerSection from '../component/BannerSection/BannerSection'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <BannerSection />
        </div>
    )
}

export default HomePage