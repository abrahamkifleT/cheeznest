import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import HeroSection from '../component/HeroSection/HeroSection'
import FeatureSection from '../component/FeatureSection/FeatureSection'
import BannerSection from '../component/BannerSection/BannerSection'
import ProductCatalog from '../component/ProductCatalog/ProductCatalog'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <BannerSection />
            <ProductCatalog />
        </div>
    )
}

export default HomePage