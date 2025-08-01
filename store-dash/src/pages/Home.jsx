import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='flex justify-center items-center m-0.5 p-0.5'>
      <aside className='flex-shrink-0'>
        <Sidebar />
      </aside>

      <div className="flex flex-col w-screen h-screen">
          <Header/>
          
          <main className="flex flex-auto p-4 bg-amber-400 overflow-y-auto justify-center items-center">
            <Outlet />
          </main>

          <Footer />
      </div>
    </div>
  );
};

export default Home;
