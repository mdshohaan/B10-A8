import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Categories from './Categories';
import Heading from './Heading';

const Home = () => {
 
  const categories = useLoaderData()
  console.log(categories);
  return (
    <div className='w-11/12 mx-auto'>
          <Banner/>
      <Heading
      title ={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
      subtitle ={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
      para={'Shop Now'}
      />
      <h1 className='text-4xl font-bold text-center mb-8'>Explore Cutting Edge Gadgets</h1>
        {/* categories tab */}
        <Categories categories={categories}/>
          {/* dynamic nested component */}
      <Outlet/>
    
    </div>
  );
};

export default Home;