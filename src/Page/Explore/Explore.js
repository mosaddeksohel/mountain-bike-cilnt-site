import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Home/Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warm-tor-69858.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <h2>Our Products</h2>
            <div className="container">
                <div className="mx-auto item">
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
        </div>
    );
};

export default Explore;