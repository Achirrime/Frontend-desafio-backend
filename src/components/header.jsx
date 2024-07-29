import React from 'react';
import { PiGraphBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-transparent text-orange-400 font-bold h-full flex items-center justify-between p-4 px-8 text-xl border border-b-4">
        <div> <PiGraphBold className='text-3xl'/></div>
        <div>
        <nav>
          <ul className="flex space-x-16 text-end justify-end ">
            <li><Link to="/" className="hover:text-lime-700">Home</Link></li>
            <li><Link to="/login" className="hover:text-lime-700">Login</Link></li>
            <li><Link to="/signup" className="hover:text-lime-700">Sign Up</Link></li>
          </ul>
        </nav>
        </div>
      </header>
  );
};

export default Header;
