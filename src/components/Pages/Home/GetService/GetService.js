import React from 'react';

const GetService = () => {
    return (
        <div className='px-5 md:px-52 bg-zinc-800 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                <div className=''>
                    <h3 className='text-white uppercase text-3xl font-bold md:text-5xl pb-11'>How To Get my Service</h3>
                    <p className='text-white '>Rather than letting your services go by, take these steps to keep your face in good shape until you can afford a full service.</p>
                </div>
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='py-5 border-t-2 border-gray-500 hover:border-green-500 bg-transparent'>
                        <div className='flex items-center pb-5 uppercase'>
                            <p className='text-green-500 text-2xl font-bold pr-3'>01</p>
                            <h3 className='text-white text-2xl font-bold'>Make An AppoinMent</h3>
                        </div>
                        <p className='text-white'>Promotors has made it easy to schedule an appointment online at a location near you in a few simple steps, easy schedule for you.</p>
                    </div>
                    <div className='py-5 border-t-2 border-gray-500 hover:border-green-500 bg-transparent'>
                        <div className='flex items-center pb-5 uppercase'>
                            <p className='text-green-500 text-2xl font-bold pr-3'>02</p>
                            <h3 className='text-white text-2xl font-bold'>SELECT SERVICE</h3>
                        </div>
                        <p className='text-white'>We specialize in teeth services and have more than 5 years of experience in teeth.  Root Canal Therapy- In the past, diseased teeth often had to be extracted.</p>
                    </div>
                    <div className='py-5 border-t-2 border-gray-500 hover:border-green-500 bg-transparent'>
                        <div className='flex items-center pb-5 uppercase'>
                            <p className='text-green-500 text-2xl font-bold pr-3'>03</p>
                            <h3 className='text-white text-2xl font-bold'>CONFIRM REQUEST</h3>
                        </div>
                        <p className='text-white'>Has your request been confirmed? Reduce no-shows, save time, and focus on serving clients is our top criterion.</p>
                    </div>
                    <div className='py-5 border-t-2 border-gray-500 hover:border-green-500 bg-transparent'>
                        <div className='flex items-center pb-5 uppercase'>
                            <p className='text-green-500 text-2xl font-bold pr-3'>04</p>
                            <h3 className='text-white text-2xl font-bold'>GET YOUR SERVICE</h3>
                        </div>
                        <p className='text-white'>Sealants are made of plastic and are applied to the chewing surfaces of the back teeth to prevent tooth decay. Sealants are painted on as a liquid and harden to form a shield over the teeth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetService;