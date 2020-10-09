import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Gallery from './Gallery';
import Slider from './Slider';
import Footer from './Footer';

const Home = () => {
    return (
        <main class="page lanidng-page">
            <Intro/>
            <Skills/>
            <Slider/>
            <Gallery/>
            <Footer/>
        </main>
    );
};

export default Home;