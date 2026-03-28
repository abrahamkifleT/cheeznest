import React, { useRef, useState } from 'react'
import './FeactureSection.css'
import Pizza1 from '../../../../assets/website/imgi_13_6389103ab64a2353ca775a88_image-16-menu-pizzaplanet-template-p-800-1.webp'
import Pizza2 from '../../../../assets/website/imgi_14_63890fc77a2bf7710450646b_image-9-menu-pizzaplanet-template-p-800-1.webp'
import Pizza3 from '../../../../assets/website/imgi_18_63890ff24c9e7491bf105aec_image-12-menu-pizzaplanet-template-p-800-2.webp'
import Pizza4 from '../../../../assets/website/imgi_7_6389101842fa401bd9c0051f_image-14-menu-pizzaplanet-template-p-800-1-1.webp'
import BackgroundImg from '../../../../assets/website/imgi_113_BG-1.webp'

const FeatureSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const children = carouselRef.current.children;
      let minDistance = Infinity;
      let closestIndex = 0;
      
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const distance = Math.abs(child.offsetLeft - scrollPosition - carouselRef.current.offsetLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const children = carouselRef.current.children;
      if (children[index]) {
        carouselRef.current.scrollTo({
          left: children[index].offsetLeft - carouselRef.current.offsetLeft,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className='feature-section' style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className='feature-content'>
        <div className='feature-context'>
          <h2 className='feature-title-1'>Pizza</h2>
          <h2 className='feature-title-2'>Featured Products</h2>
        </div>
      </div>
 
      <div className='feature-carousel' ref={carouselRef} onScroll={handleScroll}>
        <div className='feature-card'>
          <img src={Pizza1} alt="Truffle Mushroom" />
          <a>Truffle Mushroom</a>
          <p>$499</p>
        </div>

        <div className='feature-card'>
          <img src={Pizza2} alt="Prosciutto Arugula" />
          <a>Prosciutto Arugula</a>
          <p>$499</p>
        </div>

        <div className='feature-card'>
          <img src={Pizza3} alt="Margherita" />
          <a>Margherita</a>
          <p>$499</p>
        </div>

        <div className='feature-card'>
          <img src={Pizza4} alt="Pepperoni" />
          <a>Pepperoni</a>
          <p>$499</p>
        </div>
      </div>

      <div className='carousel-indicators'>
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={index} 
            className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection