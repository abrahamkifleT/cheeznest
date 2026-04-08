import React, { useState, useEffect } from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'PDF Book', 'Main dishes', 'Side dishes', 'Pizza'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/product');
                const result = await response.json();
                if (result.success) {
                    setProducts(result.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(product => 
            product.categories.some(cat => cat.name === activeCategory)
        );

    return (
        <div className='product-catalog-container'>
            <div className='product-catalog-header'>
                <p className='product-catalog-header-title'>Try Fresh <br /> & Flavourful</p>

                <div className='product-catalog-buttons'>
                    {categories.map(category => (
                        <button 
                            key={category}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className='product-catalog-list'>
                {loading ? (
                    <div className="loading">Loading products...</div>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product._id} className="product-card">
                            <div className="product-card-image">
                                <img src={product.image} alt={product.name} />
                                {product.isFeatured && <span className="featured-badge">Featured</span>}
                            </div>
                            <div className="product-card-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-footer">
                                    <span className="product-price">${product.price.toFixed(2)}</span>
                                    <button className="add-to-cart-btn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-products">No products found in this category.</div>
                )}
            </div>
        </div>
    );
};

export default ProductCatalog;
