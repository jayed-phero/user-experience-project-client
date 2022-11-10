import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Caurosel from '../Caurosel/Caurosel';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-zinc-800'>
            <Caurosel></Caurosel>
            <Service></Service>
        </div>
    );
};

export default Home;