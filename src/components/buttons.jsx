import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
      <div className="flex justify-between space-x-8 text-center">
        <Link to='/signup'>
          <button className= "bg-cyan-500 text-white py-2 px-20 rounded-2xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Registar
          </button>
        </Link>
        <Link to='/login'>
          <button className= "bg-cyan-500 text-white py-2 px-20 rounded-2xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Entrar
          </button>
        </Link>
      </div>
  );
};

export default Buttons;
