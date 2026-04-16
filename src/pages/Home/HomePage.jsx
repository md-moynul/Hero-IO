import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import TrustedByMillions from '../../components/Home/TrustedByMillions';

const HomePage = () => {
    return (
        <div className='py-10 md:py-15 lg:20 bg-base-200'>
           <HeroSection/>
           <TrustedByMillions/>
        </div>
    );
};

export default HomePage;