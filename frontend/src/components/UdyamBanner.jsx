import React from 'react';

const UdyamBanner = ({ openModal }) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="font-semibold text-lg">
                    New to MSME? Get your free Udyam Registration number first!
                </p>
                <button 
                    onClick={openModal}
                    className="bg-white text-blue-600 font-bold py-2 px-5 rounded-full shadow-lg hover:bg-slate-100 transition-transform transform hover:scale-105"
                >
                    Learn How to Register
                </button>
            </div>
        </div>
    );
};

export default UdyamBanner;