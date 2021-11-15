import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <>
            <Row className="footer">
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '3rem', marginTop: '2rem' }}>
                        <h5>Guest Service</h5>
                        <h5>Your Account</h5>
                        <h5>Shipping</h5>
                        <h6>Frequently Asked Questions</h6>
                        <h6>Why Choose Bicycle Warehouse?</h6>
                        <h5>Where to Ride</h5>
                        <h5>Gift Cards</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Learn More</h5>
                        <h5>Store Locations</h5>
                        <h5>Ready to Ride Center</h5>
                        <h5>About Us</h5>
                        <h5>Hiring/Careers</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Our Blog</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Programs</h5>
                        <h5>Free Financing</h5>
                        <h5>Ready to Ride Center</h5>
                        <h5>Ride Africa Project</h5>
                        <h5>Trade In Your Bike</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Let's Talk Bikes & Gear</h5>
                        <Button>CHAT WITY US</Button>
                        <h5>Chat hours 9AM-6PM PST, Monday-Saturday</h5>
                        <h5>Trade In Your Bike</h5>
                        <h5>Follow Us</h5>
                    </div>
                </Col>
            </Row>





        </>

    );
};

export default Footer;