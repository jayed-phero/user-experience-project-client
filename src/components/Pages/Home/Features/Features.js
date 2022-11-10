import React from 'react';

const Features = () => {
    return (
        <div className='md:px-52 min-h-screen bg-zinc-800 py-16'>
            <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Unhappy with your smile? Dentists have</h3>
                            <p className="my-6 text-gray-400">an array of tools and techniques at their disposal for improving the appearance of your smile. dental servicesIsaacson Gentle Dentistry,</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://images.pexels.com/photos/4269700/pexels-photo-4269700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Dental Sealants- Sealants are made of plastic</h3>
                            <p className="my-6 text-gray-400">Dental Sealants- Sealants are made of plastic and are applied to the chewing surfaces of the back teeth to prevent tooth decay. Sealants are painted on as a liquid </p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;