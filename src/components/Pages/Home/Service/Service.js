import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceRow from './ServiceRow';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className='md:px-52 pt-32 pb-16'>
            <div className='flex items-center justify-between mt-11'>
                <h3 className='text-green-500 font-bold text-6xl'>MY SERVICES</h3>
                <div className='text-center '>
                    <Link to='/allservices'><button className='bg-transparent border-2 border-green-500 hover:bg-green-500 duration-500 ease-in text-white font-semibold px-16 py-4 rounded-3xl hover:rounded-none'>Show all</button></Link>
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