import React from 'react';

const MyReviewsRow = ({ reviews }) => {
    const { photo, review, name, title } = reviews
    return (
        <div>
            <div className='p-7 w-full bg-zinc-900 rounded-xl'>
                <div className='flex items-center pb-3'>
                    <img src={photo} className='h-9 w-9 rounded-full mr-2' />
                    <h3 className='text-xl font-semibold text-white'>{name}</h3>
                </div>
                <div className=''>
                    <h3 className='duration-300 ease-in border-b-2 border-gray-500 hover:border-green-500 pb-5 text-white'>{review}</h3>
                    <div className='flex items-center justify-between pt-3'>
                        <h3 className='text-xl font-bold text-green-500'>Abu Musa</h3>
                        <div className='flex items-center text-yellow-400'>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star pr-2"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className='flex pt-3 items-center justify-right'>
                        <button className='h-9 w-9 border-2 rounded-full border-green-500 flex-items-center justify-center hover:bg-green-500 text-white mr-2'><i className="fa-solid fa-pen-to-square"></i></button>
                        <button className='h-9 w-9 border-2 border-green-500 rounded-full flex-items-center justify-center hover:bg-green-500 text-white'><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsRow;