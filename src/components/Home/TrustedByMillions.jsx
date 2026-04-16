import React from 'react';

const TrustedByMillions = () => {
    return (
        <div className='bg-linear-225 from-[#632EE3] to-[#9F62F2] py-10 md:py-15 lg:py-20 px-5 lg:px-0 text-base-100 text-center'>
            <div className='container mx-auto space-y-10 '>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl '>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-3 '>
                    <div>
                        <p>Total Downloads</p>
                        <h3>29.6M</h3>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h3>906K</h3>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h3>132+</h3>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedByMillions;