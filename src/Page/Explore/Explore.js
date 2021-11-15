import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Home/Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <h2>Our Products</h2>
            <div className="container mx-auto">
                <>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </>

            </div>
        </div>
    );
};

export default Explore;