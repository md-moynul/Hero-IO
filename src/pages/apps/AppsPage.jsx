import React from 'react';
import useData from '../../hooks/useData';
import AppCard from '../../components/shared/AppCard';
import { RotateLoader } from 'react-spinners';

const AppsPage = () => {
    const { apps, loading } = useData();
    const FilteredApps = apps
    return (
        <div className='container mx-auto py-10 md:py-15 lg:py-20 px-5 lg:px-0 space-y-4'>
                    <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
        
                    {
                        loading ?
                            <div className='container text-center flex items-center justify-center min-h-[50vh]'>
                                <RotateLoader color={'#80007f'} />
                            </div>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 '>
                            {FilteredApps.map( app => <AppCard key={app.id} app={app}/>)}
                            </div>
                    }
                </div>
    );
};

export default AppsPage;