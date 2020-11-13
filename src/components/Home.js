import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Gallery from './Gallery';
import Slider from './Slider';
import './assets/css/styles.css';


const Home = () => {
    return (
        <main className="page lanidng-page" style={{ minHeight: '100vh'}}>
            <Intro/>
            <Skills/>
            <Slider/>
            {/* <Gallery/> */}
        </main>
    );
};


export default Home;