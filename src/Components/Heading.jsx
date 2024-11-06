import React from 'react';
import bannerImg from '../assets/banner.jpg';

const Heading = ({title,subtitle,para}) => {
  return (
    <div className=' bg-purple-600 relative min-h-[400px] flex flex-col  items-center text-center rounded-xl mb-96 p-10 '>
    {/* Hero Section */}
    <div className="mt-12 text-white max-w-xl mb-2">
        <h2 className="text-4xl font-bold mb-4">{title}</h2> 
        <h5 className="text-md  mb-4">{subtitle}</h5>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-200 transition">{para}</button> 
      
      </div>
      <div className='absolute -bottom-72 border-2 p-5 bg-white/5 rounded-xl'>
          <img src={bannerImg} alt="" className='w-[700px] h-[350px] rounded-lg'/>
        </div>
      
    </div>
  );
};

export default Heading;