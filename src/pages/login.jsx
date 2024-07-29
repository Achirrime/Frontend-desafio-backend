// src/components/Login.js
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { PiLockKeyBold } from 'react-icons/pi';
import { BiEnvelope } from 'react-icons/bi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    
    setError('');
    alert('Login successful!');
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-transparent">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="block text-zinc-400 font-light"></label>
              <div className="flex items-center border  border-slate-900 rounded-2xl">
               
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Inserir email"
                  className="w-full px-1 py-2 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  required
                />
                 <BiEnvelope className="w-5 h-5 text-black mr-3 text-right" />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-gray-400 font-light"></label>
              <div className="flex items-center border border-slate-900 rounded-2xl">
               
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Inserir senha"
                  className="w-full px-1 py-2 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  required
                />
                 <PiLockKeyBold className="w-5 h-5 text-black place-items-end mr-3 " />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-2xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
