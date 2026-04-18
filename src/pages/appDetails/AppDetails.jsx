import React, { useContext } from 'react';
import { Link, useParams } from 'react-router';
import useData from '../../hooks/useData';
import { RotateLoader } from 'react-spinners';
import download from '../../assets/img/icon-downloads.png'
import rating from '../../assets/img/icon-ratings.png'
import review from '../../assets/img/icon-review.png'
import Chart from '../../components/Chart';
import appError from '../../assets/img/App-Error.png'
import { InstalledAppContext } from '../../context/InstalledAppContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const [installedApps, setInstalledApps] = useContext(InstalledAppContext)
    const { appId } = useParams()
    // console.log(appId);
    const { apps, loading } = useData();
    // console.log(apps);
    if (loading) {
        return (
            <div className='container text-center flex items-center justify-center min-h-[50vh]'>
                <RotateLoader color={'#80007f'} />
            </div>
        )
    }

    const targetedApp = apps.find(app => app.id === parseInt(appId))
    if (!targetedApp) {
        return (
            <div className='max-h-screen py-10 md:py-15 lg:20 px-5 lg:px-0 bg-base-200 '>
                <div className='container mx-auto space-y-10 text-center'>
                    <img className='mx-auto' src={appError} alt="" />
                    <h2 className='text-3xl lg:text-5xl font-bold '>OOPS!! APP NOT FOUND</h2>
                    <p className="text-gray-400">The App you are requesting is not found on our system.  please try another apps</p>
                    <button
                        onClick={() => window.history.back()}
                        className=" bg-purple-500 text-white btn"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        )
    }
    const {
        image,
        title,
        companyName,
        downloads,
        ratingAvg,
        reviews,
        size,
        ratings,
        description
    } = targetedApp;
    const handelInstall = ({ targetedApp }) => {
        const isEasiest = installedApps.find(app => app.id === targetedApp.id)
        if (isEasiest) {
            toast.error(`${title} is already installed`)
        } else {
            setInstalledApps([...installedApps, targetedApp])
             toast.success(`${title} is successfully installed`)
        }
      

    }
    const downloadFast = downloads.slice(0, 1);
    const downloadLast = downloads.slice(-1);
    const reviewsFast = parseInt(reviews) / 1000;
    return (
        <div className='py-10 md:py-15 lg:20 px-5 lg:px-0 bg-base-200 '>
            <div className='container mx-auto space-y-5 md:space-y-8 lg:space-y-10'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='p-8 bg-base-100 rounded-xl'>
                        <img className='w-50  md:w-80 mx-auto' src={image} alt="" />
                    </div>
                    <div className='space-y-8 flex-1'>
                        <h2 className='font-bold text-2xl lg:text-3xl'>{title}</h2>
                        <p className='text-xl text-gray-400'>Developed by <span className='text-purple-500 font-semibold'>{companyName}</span></p>
                        <hr className='text-base-300' />
                        <div className='flex gap-6 '>
                            <div className='space-y-2 w-35 text-center'>
                                <div className='flex justify-center'>
                                    <img className='' src={download} alt="" />
                                </div>
                                <p>Downloads</p>
                                <p className='text-4xl font-extrabold text-center'>{downloadFast}{downloadLast}</p>
                            </div>
                            <div className='space-y-2 w-35 text-center'>
                                <div className='flex justify-center'>
                                    <img className='' src={rating} alt="" />
                                </div>
                                <p>Average Ratings</p>
                                <p className='text-4xl font-extrabold text-center'>{ratingAvg}</p>
                            </div>
                            <div className='space-y-2 w-35 text-center'>
                                <div className='flex justify-center'>
                                    <img className='' src={review} alt="" />
                                </div>
                                <p>Total Reviews</p>
                                <p className='text-4xl font-extrabold text-center'>{reviewsFast}K</p>
                            </div>
                        </div>
                        <button onClick={() => { handelInstall({ targetedApp }) }} className='btn btn-success text-white text-xl font-semibold'>Install Now ({size} MB)</button>
                    </div>
                </div>
                <hr className="text-base-300" />
                <div className='space-y-4'>
                    <h3 className='text-2xl font-semibold'>Rating</h3>
                    <div>
                        <Chart ratings={ratings} />
                    </div>
                </div>
                <hr className="text-base-300" />
                <div className='space-y-4'>
                    <h3 className='text-2xl font-semibold'>Description</h3>
                    <p className='text-gray-400'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;