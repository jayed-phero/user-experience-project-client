import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Spinner = () => {
    useTitle('Loading...')
    return (
        <div className='px-5 min-h-screen md:px-52 bg-zinc-800'>
            <div className='flex items-center justify-center min-h-screen'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
            </div>
        </div>
    );
};

export default Spinner;