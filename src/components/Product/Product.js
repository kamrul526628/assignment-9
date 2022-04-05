import React from 'react';

import './Product.css';

const Product = ({product}) => {
    const { name, img, reviews, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>reviews: ${reviews}</p>
                
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            
        </div>
    );
};

export default Product;