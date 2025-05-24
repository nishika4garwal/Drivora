import React from 'react';
import logo from '../assets/logo.png';

const Home = () => {
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
        <button className="w-full bg-black text-white py-3 rounded-xl text-base hover:bg-gray-900 transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
