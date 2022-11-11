import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceRow from './ServiceRow';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://review-assignment-eleven-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className='px-5 md:px-52 pb-16'>
            <div className='flex items-center justify-between mt-16 md:mt-32'>
                <h3 className='text-center md:text-left text-green-500 font-bold text-3xl md:text-6xl'>MY SERVICES</h3>
                <div className='text-center '>
                    <Link to='/allservices'><button className='bg-transparent border-2 border-green-500 hover:bg-green-500 duration-500 ease-in text-white font-semibold px-5 py-3 md:px-16 md:py-4 rounded-3xl hover:rounded-none'>Show all</button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceRow
                        key={service._id}
                        service={service}
                    ></ServiceRow>)
                }
            </div>
        </div>
    );
};

export default Service;