import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const {id, image, title, downloads, ratingAvg } = app
    const downloadFast = downloads.slice(0,1);
    const downloadLast = downloads.slice(-1);
    return (
        <Link to={`/apps/${id}`} className='space-y-4 shadow rounded-xl'>
            <div className='bg-base-300 py-8'>
                <img src={image} className='h-40 mx-auto' alt="" />
            </div>

            <div className='p-4 space-y-4'>

                <h3 className='text-xl font-bold '>{title}</h3>
                <div className="flex justify-between" >
                    <p className='flex gap-1 items-center px-3 py-1.5 rounded bg-green-100 text-green-500'><FiDownload />{downloadFast}{downloadLast}</p>
                    <p className='flex gap-1 items-center px-3 py-1.5 rounded bg-orange-100 text-orange-500'><IoMdStar />{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;