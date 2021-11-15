import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import image1 from '../../../image/img-1.jpg'
import image2 from '../../../image/paul-green-gOHfFgwyDNM-unsplash (1).jpg'
import image3 from '../../../image/img-3.jpg'
import { Link } from 'react-router-dom';

const Carusel = () => {
    return (

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Link to='/explore'><Button>Explore</Button></Link>
                    <p>Let's ride to see the world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <Link to='/explore'><Button>Explore</Button></Link>
                    <h4>We are ready to ride anywhere.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <Link to='/explore'><Button>Explore</Button></Link>
                    <h4>Join with us to enjoy the world.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Carusel;