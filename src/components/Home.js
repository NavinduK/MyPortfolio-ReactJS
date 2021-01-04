import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Gallery from './Gallery';
import Slider from './Slider';
import './assets/css/styles.css';

const Home = ({webData,graphicData,skillData}) => {
    return (
        <div className="page lanidng-page">
            <Intro/>
            <Skills data={skillData}/>
            <Slider sdata={skillData?.['web-bio']} wdata={webData}/>
            <Gallery sdata={skillData?.['graphic-bio']} data={graphicData}/>
        </div>
    );
};

export default Home;