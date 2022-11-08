import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import AllServiceRow from './AllServiceRow';

const AllServices = () => {

    const [allservices, setAllServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllServices(data)
            })
    }, [])

    return (
        <PhotoProvider>
            <div className='md:px-52 pt-16 pb-20 bg-zinc-800'>
                <div className='pb-9'>
                    <p className='text-green-500 font-bold text-5xl'>SERVICES</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        allservices.map(service => <AllServiceRow
                            key={service._id}
                            service={service}
                        ></AllServiceRow>)
                    }
                </div>
            </div>
        </PhotoProvider>
    );
};

export default AllServices;