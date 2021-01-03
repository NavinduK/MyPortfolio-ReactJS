import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Gallery from './Gallery';
import Slider from './Slider';
import './assets/css/styles.css';

const Home = ({webData,graphicData,skillData}) => {
    return (
        <main className="page lanidng-page" style={{ minHeight: '100vh'}}>
            <Intro/>
            <Skills data={skillData}/>
            <Slider sdata={skillData?.['web-bio']} wdata={webData}/>
            <Gallery data={graphicData}/>
        </main>
    );
};

export default Home;