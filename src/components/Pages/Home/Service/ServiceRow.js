import React from 'react';
import { Link } from 'react-router-dom';


const ServiceRow = ({ service }) => {
    const { image, _id, title, desc, rating } = service;
    return (
        <div>
            <div class="flex justify-center pt-12">
                <div class="max-w-sm  p-3 bg-transparent border-t-2 border-gray-500 hover:border-green-500">
                    <a href="#!">
                        <img className="rounded h-32 w-full " src={image} alt="" />
                    </a>
                    <div class="px-3 pt-3">
                        <h5 class="text-2xl uppercase text-white font-medium mb-2">{title}</h5>
                        <p class="text-gray-500 text-base mb-2">
                            {desc.length > 100 ? desc.slice(0, 100) : desc}...
                        </p>
                        <p className='mb-4'>Price : </p>
                        <Link to={`/servicedetails/${_id}`}>
                            <div className='flex items-center'>
                                <p className='flex items-center hover:text-white justify-center h-6 w-6 bg-green-500 hover:bg-transparent border-2 border-green-500 duration-500 ease-in text-white rounded mr-3'><i class="fa-solid fa-angle-right"></i></p>
                                <h3 className='hover:text-green-500 ease-in duration-300 uppercase text-white font-semibold'>Details service</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;