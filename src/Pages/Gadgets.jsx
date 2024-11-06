import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import Heading from "../Components/Heading";
const Gadgets = () => {
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState(data)

  const handleSort = sortBy => {
    if (sortBy == 'price') {
      // sort by popularity
      const sorted = [...data].sort((a, b) => b.price - a.price)
      setGadgets(sorted)
    } else if (sortBy == 'rating') {
      // asc sort by rating
      const sorted = [...data].sort((a, b) => a.rating - b.rating)
      setGadgets(sorted)
    }
  }
  return (
    <>
      <div>
        <Heading
          title={"Gadgets"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          para={"View More"}
        />
         <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-thin'>
            Sort Gadget&apos;s by Price & Rating-&gt;
          </h1>
        </div>
        <div className='space-x-4'>
          <button
            onClick={() => handleSort('price')}
            className='btn btn-warning'
          >
            Sort By price (DSC)
          </button>
          <button
            onClick={() => handleSort('rating')}
            className='btn btn-warning'
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {gadgets.map((gadget) => (
          <Card key={gadget.product_id} gadget={gadget} />
        ))}
      </div>
    </>
  );
};

export default Gadgets;
