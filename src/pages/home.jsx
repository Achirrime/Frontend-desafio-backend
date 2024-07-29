import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Img from '../assets/menu.jpg.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='w-full h-screen bg-transparent'>
        <h1 className='text-2xl font-black text-center mt-10 text-black'>Bem-vindo à minha página</h1>
        <img src={Img} alt="" className='w-8/12 ml-64 mt-20' />
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;


