import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { BiEnvelope } from 'react-icons/bi';
import { PiLockKey, PiLockKeyBold } from 'react-icons/pi';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (!email || !password || !passwordConfirmation) {
      setError('All fields are required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    if (!acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }

    alert('Form submitted successfully!');

    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setAcceptTerms(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-transparent">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Registar-se</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="block text-zinc-400 font-medium"></label>
              <div className="flex items-center border text-black border-slate-900 rounded-2xl">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Inserir Email"
                  className="w-full px-3 py-2 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  required
                />
                <BiEnvelope className="w-5 h-5 text-black mr-3" />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-zinc-400 font-medium"></label>
              <div className="flex items-center border border-slate-900 rounded-2xl">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Inserir senha"
                  className="w-full px-3 py-2 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  required
                />
                <PiLockKeyBold className="w-5 h-5 text-black mr-3" />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="passwordConfirmation" className="block text-zinc-400 font-medium"></label>
              <div className="flex items-center border border-slate-900 rounded-2xl">
                <input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Confirmar senha"
                  className="w-full px-3 py-2 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  required
                />
                <PiLockKey className="w-5 h-5 text-black mr-3" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-5 w-5 text-blue-500 border-black rounded"
                required
              />
              <label htmlFor="acceptTerms" className="text-black">
                Aceito os <a href="/terms" className="text-blue-500 underline">termos e condições</a>
              </label>
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-2xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Registar-se
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
