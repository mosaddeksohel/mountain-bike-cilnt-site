import React from 'react';
import Products from '../../../Page/Products/Products';
import RattingSlider from '../../RattingSlider/RattingSlider';
import Carusel from '../Carusel/Carusel';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Carusel></Carusel>
            <Products></Products>
            <RattingSlider />
            <Footer></Footer>
        </div>
    );
};

export default Home;