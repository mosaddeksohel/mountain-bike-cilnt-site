import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ManageItem.css'

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                }
            })
    }
    return (
        <div>
            <h2 style={{ color: 'indianred' }}>Manage All Products</h2>

            {
                products.map(product => <div
                    key={product._id}
                >
                    {/* <Container className="deleteitem">
                        <Card style={{ border: 'none' }}>
                            <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={product.img} />
                            <Card.Body className='mt-0'>
                                <Card.Title >{product.name}</Card.Title>
                                <Card.Text>{product.description} </Card.Text>
                                <Card.Title>Price: ${product.price}</Card.Title>
                                <Button style={{ width: '100%', backgroundColor: 'goldenrod' }} className="warning" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Container> */}
                    <div>
                        <div className="item">
                            <Card style={{ border: 'none' }}>
                                <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={product.img} />
                                <Card.Body className='mt-0'>
                                    <Card.Title >{product.name}</Card.Title>
                                    <Card.Text>{product.description} </Card.Text>
                                    <Card.Title>Price: ${product.price}</Card.Title>
                                    <Button style={{ width: '100%', backgroundColor: 'goldenrod' }} className="warning" onClick={() => handleDelete(product._id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>)

            }
        </div>
    );
};

export default ManageProducts;