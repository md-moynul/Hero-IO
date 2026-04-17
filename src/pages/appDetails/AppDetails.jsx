import React from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { RotateLoader } from 'react-spinners';

const AppDetails = () => {
    const { appId } = useParams()
    console.log(appId);
    const { apps, loading } = useData();
    const targetedApp = apps.find(app => app.id === parseInt(appId))
    console.log(targetedApp);
    if (loading) {
        return (
            <div className='container text-center flex items-center justify-center min-h-[50vh]'>
                <RotateLoader color={'#80007f'} />
            </div>
        )
    }
    return (
        <div>
            <h2>{targetedApp.title}</h2>
        </div>
    );
};

export default AppDetails;