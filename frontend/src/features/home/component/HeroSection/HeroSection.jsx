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
            <div className="hero-top-section">
            <div className="hero-content">
                <div className="hero-title-box">
                    <h2>Pizza & friends</h2>
                </div>

                <div className="sub">
                    <h2>are all we need!</h2>
                </div>

                <div className="hero-btn-box">
                    <a href="/shop">Shop Now</a>
                </div>
            </div>
            </div>
            

            <div className="hero-image-box">
                <img src={heroMain} alt="Cheeznest Pizza" />
            </div>

        </section>
    );
};

export default HeroSection;