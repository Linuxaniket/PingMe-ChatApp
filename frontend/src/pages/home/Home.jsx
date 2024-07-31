import React from 'react';
import Sidebar from '../../components/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden bg-purple-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>

      <Sidebar/>
      <MessageContainer/>
      
      
    </div>
  )
}

export default Home
