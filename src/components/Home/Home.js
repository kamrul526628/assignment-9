import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('home.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        
            <div>
                <h1 className='public-reviews'>Public Reviews</h1>
                <div className="products-container">
                
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        ></Product>)
                }
                </div>

                <div className='see-more'>
                    <a href="/Reviews">See All Reviews</a>
                </div>
            </div>
            
        
    );
};

export default Home;