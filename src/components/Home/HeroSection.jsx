import React from 'react';
import Hero from '../../assets/img/hero.png'
import playStore from '../../assets/img/playStore.png'
import apple from '../../assets/img/AppleStore.png'
const HeroSection = () => {
    return (
        <div className='text-center container mx-auto px-5 lg:px-0 space-y-10 '>
            <div className='space-y-4 '>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold ">We Build <br />Productive Apps</h1>
                <p className='text-gray-400'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center w-[30%] gap-4 mx-auto '>
                <button className='flex gap-2.5 items-center btn py-7'><img src={playStore} alt="" />Google Play</button>
                <button className='flex gap-2.5 items-center btn py-7'><img src={apple} alt="" />App Store</button>
            </div>
            <div>
                <img src={Hero} alt="" className='mx-auto ' />
            </div>


        </div>
    );
};

export default HeroSection;