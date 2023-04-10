import React from 'react';
import HomeTop from './HomeTop/HomeTop';
import Insightful from './Insightful/Insightful';
import NumbersSpeak from './NumbersSpeak/NumbersSpeak';
import OurServices from './OurServices/OurServices';
import Testimonials from './Testimonials/Testimonials';
import TrustedBy from './TrustedBy/TrustedBy';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <OurServices></OurServices>
            <NumbersSpeak></NumbersSpeak>
            <TrustedBy></TrustedBy>
            <Testimonials></Testimonials>
            <WhoWeAre></WhoWeAre>
            <Insightful></Insightful>
        </div>
    );
};

export default Home;