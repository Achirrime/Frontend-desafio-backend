import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { Featured } from '../components/slieder';
import { ImgCenter } from '../components/imgCenter';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='w-full h-screen bg-transparent'>
        <h1 className='text-2xl font-black text-center mt-10 text-black mb-2'>Bem-vindo à minha página</h1>
        <Featured/>
        <h2 className=" font-bold mb-2 text-center text-2xl ">
               Ainda não é cliente, registra-te.
              </h2>
        <ImgCenter/>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;


