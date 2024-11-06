
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Heading from '../Components/Heading';


const Statistics = () => {
  const data = [
    { product_title: 'Laptop Pro X', price: 1200, rating: 4.5 },
    { product_title: 'Desktop Ultra 5', price: 900, rating: 4.6 },
    { product_title: 'Tablet Z', price: 500, rating: 4.2 },
    { product_title: 'Smartphone 12', price: 800, rating: 4.7 },
    { product_title: 'Smartphone Lite', price: 650, rating: 4.0 },
    { product_title: 'Smart Watch Plus', price: 250, rating: 4.3 },
    { product_title: 'Fitness Tracker Max', price: 180, rating: 4.1 },
    { product_title: 'USB-C Charger', price: 60, rating: 4.1 },
    { product_title: 'Portable Power Bank', price: 100, rating: 4.4 },
    { product_title: 'Power Bank', price: 100, rating: 4.4 },
    { product_title: 'Wireless Earbuds X', price: 120, rating: 4.6 },
    { product_title: 'Wireless Earbuds', price: 120, rating: 4.6 },
  ];
  return (
   <>
    <div>
      <Heading
      title ={'Statistics'}
      subtitle ={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
       para={'Show'}
      
     />
    </div>
<div>

<div>
      <h2 className='font-bold'>Product Price and Rating Line Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
          <Line type="monotone" dataKey="rating" stroke="#82ca9d" name="Rating" />
        </LineChart>
      </ResponsiveContainer>
    </div>

</div>


   </>

  );
};

export default Statistics;