import React from 'react';
import PromotionSection from '../components/PromotionSection';
import NavBar from '../components/NavBar';
import ProjectSection from '../components/ProjectSection'
import chatbot from '../images/chatbot icon.png'

const Dashboard = () => {
  return (
    <div className="">
      <PromotionSection />
      <NavBar />
      <ProjectSection />
      <img src={chatbot} alt='' className='bg-black w-[60px] rounded-full md:flex fixed right-8 bottom-8 hidden'/>
    </div>
  );
}

export default Dashboard;
