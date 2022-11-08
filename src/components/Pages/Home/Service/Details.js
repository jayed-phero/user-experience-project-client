import React from 'react';

const Details = () => {
    return (
        <div className='md:px-52 bg-zinc-800'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white w-full">
                            <a href="#!">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl text-green-500 font-bold'>Customer Review</h3>
                    <div className='p-3 w-full bg-zinc-900 shadow-lg rounded-lg'>
                        <div className='flex items-center'>
                            <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className='h-12 w-12 rounded-full mr-5' />
                            <h3 className='text-black font-semibold text-white'> Muhammad Jayed</h3>
                        </div>
                        <div>
                            <h3 className='text-gray-700'>Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;