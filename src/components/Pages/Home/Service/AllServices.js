import React, { useEffect, useState } from 'react';
import ServiceRow from './ServiceRow';

const AllServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])

    return (
        <div className='md:px-52 pt-16 pb-20 bg-zinc-800'>
            <div className='text-center pb-20'>
                <p className='text-green-500 font-bold text-xl pb-2'>SERVICES</p>
                <h3 className='text-5xl font-bold text-white'>SERVICES WITH <span className='text-green-500'>DESC.</span></h3>
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

export default AllServices;