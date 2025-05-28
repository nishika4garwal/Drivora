import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-6 py-8">
      {/* Large Transparent Logo */}
      <img src={logo} alt="Drivora Logo" className="w-48 mb-8" />

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          Welcome to Drivora
        </h2>
        <p className="text-sm text-gray-600 mb-5 text-center">
          Your journey begins here. Just click, ride and relax.
        </p>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
      </div>
    </div>
  );
};

export default Start;
