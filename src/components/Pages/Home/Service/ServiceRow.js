import React from 'react';

const ServiceRow = ({ service }) => {
    const { image, _id, title, desc, rating } = service;
    return (
        <div>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm border border-gray-500 p-3 bg-transparent hover:border-green-500">
                    <a href="#!">
                        <img className="rounded-xl h-44 w-full" src={image} alt="" />
                    </a>
                    <div class="px-3 pt-3">
                        <p className='text-green-500 '>Your Choiceable service</p>
                        <h5 class="text-2xl text-white font-medium mb-2">{title}</h5>
                        <p class="text-gray-500 text-base mb-4">
                            {desc.length > 100 ? desc.slice(0, 100) : desc}
                        </p>
                        {/* <p className='text-green-500 mb-2'>Rating: {rating}</p> */}
                        <div className='text-center'>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs w-full leading-tight uppercase rounded shadow-md hover:bg-transparent border-2 border-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;