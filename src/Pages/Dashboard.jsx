import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Heading from '../Components/Heading';
import { getAllFavorites, removeFavorite } from '../utils';

const Dashboard = () => {
 

  const [gadgets,setGadgets] = useState([])
  useEffect(()=>{
    const favorites = getAllFavorites()
    setGadgets(favorites)
  },[])

  const handleRemove =(product_id)=>{
    removeFavorite(product_id)
    const favorites = getAllFavorites()
    setGadgets(favorites)
  }
  return (
   <>
    <div>
     <Heading
      title ={'Dashboard'}
      subtitle ={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
      para={'Cart'}
      
     />
    </div>

{
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
 {gadgets.map((gadget) => (
   <Card handleRemove={handleRemove} key={gadget.product_id} gadget={gadget} />
 ))}
</div>

}
   </>
  );
};

export default Dashboard;