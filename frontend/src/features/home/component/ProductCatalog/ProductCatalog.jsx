  import React from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
  return (
    <div className='product-catalog-container'>
      <div className='product-catalog-header'>
        {/* Exact text from the site: Try Fresh & Flavourful */}
        <p className='product-catalog-header-title'>Try Fresh <br/> & Flavourful</p>

        <div className='product-catalog-buttons'>
          <button>PDF Book</button>
          <button>Main dishes</button>
          <button>Side dishes</button>
          <button>Pizza</button>
        </div>
      </div>

      <div className='product-catalog-list'>
        {/* Product items will go here */}
      </div>
    </div>
  );
};

export default ProductCatalog;
