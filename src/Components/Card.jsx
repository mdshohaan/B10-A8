import React from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

const Card = ({ gadget,handleRemove }) => {
  const {pathname} = useLocation()
  console.log(pathname);
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget || {};
  return (
    <div className="flex relative ">
      <Link
        to={`/gadget/${product_id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden space-y-2"
      >
        <figure className="w-[400px] h-48 overflow-hidden ">
          <img className="h-full object-cover w-full" src={product_image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {product_title}</h1>
          <p>Category: {category}</p>
          <p className="font-bold">price: {price}</p>
          <p className="font-bold">Rating: {rating}</p>
          <button className="btn btn-xs btn-warning">View Details</button>
        </div>
      </Link>
      {pathname === '/dashboard' && (
        <div
          onClick={() => handleRemove(product_id)}
          className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -left-5'
        >
          <FaTrashAlt size={20} />
        </div>
      )}
    </div>
  );
};

export default Card;
