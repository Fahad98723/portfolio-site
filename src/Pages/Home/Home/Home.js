import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProject from '../MyProject/MyProject';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills/>
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;