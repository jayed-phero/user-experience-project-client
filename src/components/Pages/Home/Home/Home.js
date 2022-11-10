import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Caurosel from '../Caurosel/Caurosel';
import Features from '../Features/Features';
import GetService from '../GetService/GetService';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-zinc-800'>
            <Caurosel></Caurosel>
            <Service></Service>
            <Features></Features>
            <GetService></GetService>
        </div>
    );
};

export default Home;