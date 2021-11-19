import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warm-tor-69858.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Our Products</h2>
            <div className="mx-auto m-2">
                <div className="productsItem container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>).slice(0, 6)
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;