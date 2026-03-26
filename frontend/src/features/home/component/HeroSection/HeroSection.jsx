import React from 'react';
import './HeroSection.css';

// Importing images from assets/website
import heroMain from '../../../../assets/website/imgi_2_Hero_Main_Image-removebg-preview-1.webp';
import element1 from '../../../../assets/website/imgi_3_Hero-Design-Element-Image-1-2.webp';
import element2 from '../../../../assets/website/imgi_4_Hero-Design-Element-Image-1-1-1.webp';
import element3 from '../../../../assets/website/imgi_5_Hero-Design-Element-Image-2-1-1.webp';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h2 className="hero-title">Pizza & friends</h2>
                    <h2 className="hero-title sub-title">are all we need!</h2>
                    <div className="hero-button-wrapper">
                        <a href="/shop" className="hero-button">
                            <span className="button-text">SHOP NOW</span>
                        </a>
                    </div>
                </div>
                
                <div className="hero-images">
                    <div className="main-image-wrapper">
                        <img 
                            src={heroMain} 
                            alt="Hero Main" 
                            className="hero-main-image"
                        />
                    </div>
                    
                    {/* Floating Design Elements */}
                    <div className="floating-element element-1">
                        <img src={element1} alt="Design Element 1" />
                    </div>
                    <div className="floating-element element-2">
                        <img src={element2} alt="Design Element 2" />
                    </div>
                    <div className="floating-element element-3">
                        <img src={element3} alt="Design Element 3" />
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default HeroSection;