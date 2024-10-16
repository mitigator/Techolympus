import React from 'react';
import Loader from './Loader';

const Preloader = () => {
    return (
        <div className="preloader h-screen w-full flex items-center justify-center bg-[#070707] text-[#e7b472]">
            <Loader/>
        </div>
    );
}

export default Preloader;
