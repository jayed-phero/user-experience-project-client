import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { title, image, _id, desc } = serviceDetails;

    return (
        <div className='md:px-52 bg-zinc-800'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-11 pt-20'>
                <div class="flex justify-center col-span-2">
                    <div class="rounded-lg w-full ">
                        <a href="#!">
                            <img className="rounded-3xl h-80 w-full" src={image} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-white text-3xl font-medium mb-3">{title}</h5>
                            <p class="text-white text-base mb-4">{desc}</p>
                            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                                <p class="text-white text-base mb-4">{desc}</p>
                                <p class="text-white text-base mb-4">{desc}</p>
                            </div> */}
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl text-green-500 font-bold pb-5'>Customer Review</h3>
                    <div className='p-7 w-full bg-zinc-900 '>
                        <div className='flex items-center pb-3'>
                            <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className='h-9 w-9 rounded-full mr-2' />
                            <h3 className='text-xl font-semibold text-white'> Muhammad Jayed</h3>
                        </div>
                        <div>
                            <h3 className='duration-300 ease-in border-b-2 border-gray-500 hover:border-green-500 pb-5 text-white'>Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
                            <div className='flex items-center text-yellow-400 pt-5'>
                                <i className="fa-solid fa-star pr-2"></i>
                                <i className="fa-solid fa-star pr-2"></i>
                                <i className="fa-solid fa-star pr-2"></i>
                                <i className="fa-solid fa-star pr-2"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;