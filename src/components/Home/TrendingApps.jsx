import React from 'react';

const TrendingApps = () => {
    return (
        <div className='container mx-auto py-10 md:py-15 lg:py-20 px-5 lg:px-0 space-y-4'>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h2>
            <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div>

            </div>
            <div className='flex justify-center items-center'>
                 <button className=' btn bg-linear-225 from-[#632EE3] to-[#9F62F2] text-base-100'>Show All</button>
            </div>
           
        </div>
    );
};

export default TrendingApps;