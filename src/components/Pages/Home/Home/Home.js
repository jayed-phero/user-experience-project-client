import React from 'react';
import Caurosel from '../Caurosel/Caurosel';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='bg-zinc-800'>
            <Caurosel></Caurosel>
            <Service></Service>
        </div>
    );
};

export default Home;