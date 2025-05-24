import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const UserLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const[userData, setUserData] = React.useState({});

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form reload
   setUserData({
      email: email,
      password: password
    });
    console.log(userData);
    // console.log('Email:', email);
    // console.log('Password:', password);
    setEmail(''); // Clear email input
    setPassword(''); // Clear password input
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center px-6 py-8">
      {/* Logo at top */}
      <img src={logo} alt="Drivora Logo" className="w-48 mb-10 mt-6" />

      {/* Heading */}
     <h2 className="text-2xl font-bold text-gray-800 mb-6">User Login</h2>

      {/* Login form card */}
      <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-xs p-6 flex flex-col"
      >
        {/* Email Input */}
        <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
          Enter Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@gmail.com"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-gray-700 font-semibold mb-1">
          Enter Password
        </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl text-base hover:bg-gray-900 transition mb-6"
        >
          Login
        </button>

        {/* New here / Create account */}
        <div className="text-center mb-6 text-sm font-medium">
          <span className="text-black">New here? </span>
          <Link to="/signup" className="text-blue-600 hover:underline focus:outline-none">
            Create new account
          </Link>
        </div>

        {/* Sign in as captain button */}
        <Link to="/captain-login">
          <button
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-xl text-base hover:bg-green-700 transition"
          >
            Sign in as Captain
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
