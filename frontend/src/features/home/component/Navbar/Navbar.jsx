import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container navbar-inner">
        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li><a href="/" className="nav-link active">Home</a></li>
          <li className="has-dropdown">
            <a href="/shop" className="nav-link">
              Shop
              <svg aria-hidden="true" className="sub-arrow" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </a>
          </li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/blog" className="nav-link">Blog</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Logo Section */}
        <div className="nav-logo">
          <a href="/">
            <img 
              src="https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/Logo-1.png" 
              alt="Cheeznest Logo" 
              width="139" 
              height="31" 
            />
          </a>
        </div>

        {/* Action Icons */}
        <div className="nav-actions">
          {/* Search Icon */}
          <button className="icon-button" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
              <path fill="currentColor" d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z"></path>
            </svg>
          </button>

          {/* Cart Icon */}
          <div className="cart-toggle">
            <span className="price-amount">$0.00</span>
            <div className="cart-icon-wrapper">
              <span className="cart-badge">0</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_4_1258)">
                  <path d="M5.9987 14.6663C6.36689 14.6663 6.66536 14.3679 6.66536 13.9997C6.66536 13.6315 6.36689 13.333 5.9987 13.333C5.63051 13.333 5.33203 13.6315 5.33203 13.9997C5.33203 14.3679 5.63051 14.6663 5.9987 14.6663Z" stroke="#B41405" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M13.3346 14.6663C13.7028 14.6663 14.0013 14.3679 14.0013 13.9997C14.0013 13.6315 13.7028 13.333 13.3346 13.333C12.9664 13.333 12.668 13.6315 12.668 13.9997C12.668 14.3679 12.9664 14.6663 13.3346 14.6663Z" stroke="#B41405" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M0.667969 0.666992H3.33464L5.1213 9.59366C5.18226 9.90059 5.34924 10.1763 5.593 10.3725C5.83676 10.5687 6.14177 10.673 6.45464 10.667H12.9346C13.2475 10.673 13.5525 10.5687 13.7963 10.3725C14.04 10.1763 14.207 9.90059 14.268 9.59366L15.3346 4.00033H4.0013" stroke="#B41405" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_4_1258">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* User Icon */}
          <button className="icon-button" aria-label="User Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M13.3346 14V12.6667C13.3346 11.9594 13.0537 11.2811 12.5536 10.781C12.0535 10.281 11.3752 10 10.668 10H5.33464C4.62739 10 3.94911 10.281 3.44902 10.781C2.94892 11.2811 2.66797 11.9594 2.66797 12.6667V14" stroke="#B41405" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M7.9987 7.33333C9.47146 7.33333 10.6654 6.13943 10.6654 4.66667C10.6654 3.19391 9.47146 2 7.9987 2C6.52594 2 5.33203 3.19391 5.33203 4.66667C5.33203 6.13943 6.52594 7.33333 7.9987 7.33333Z" stroke="#B41405" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="icon-button mobile-toggle" aria-label="Menu Toggle">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="currentColor" d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;