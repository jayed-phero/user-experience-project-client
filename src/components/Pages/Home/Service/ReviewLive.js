import React from 'react';

const ReviewLive = ({ comment }) => {
    const { name, photo, review, headtitle } = comment;
    return (
        <div>
            <div className='p-7 w-full bg-zinc-900 mb-3 rounded-xl'>
                <div className='flex items-center pb-3'>
                    <img src={photo} className='h-9 w-9 rounded-full mr-2' />
                    <h3 className='text-xl font-semibold text-white'>{name}</h3>
                </div>
                <div>
                    <h3 className='duration-300 ease-in border-b-2 border-gray-500 hover:border-green-500 pb-5 text-white'>{review}</h3>
                    <div className='flex items-center justify-between pt-3'>
                        <h3 className='text-xl font-bold text-green-500'>{headtitle}</h3>
                        <div className='flex items-center text-yellow-400'>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewLive;