import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { AuthContext } from '../../../../Context/UserContext';
import useTitle from '../../../../hooks/useTitle';
import AllServiceRow from './AllServiceRow';

const AllServices = () => {
    const {loading, setLoading} = useContext(AuthContext)
     useTitle('Services')
    const [allservices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://review-assignment-eleven-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllServices(data)
            })
    }, [])


    return (
        <PhotoProvider>
            <div className='px-5 md:px-52 pt-16 pb-20 bg-zinc-800'>
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