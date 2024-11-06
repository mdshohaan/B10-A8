import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../Components/Heading";
import { addfavorite, getAllFavorites } from "../utils";



const GadgetDetails = () => {
  const {product_id} = useParams()
  
  const data = useLoaderData()

const [gadget,setgadgets] = useState({})

 const [isFavorite, setIsFavorite] = useState(false)
useEffect(()=>{
const singleData =data.find(gadget => gadget.product_id == product_id)
setgadgets(singleData)

const favorites = getAllFavorites()
const isExist = favorites.find(item =>item.product_id ==singleData.product_id)
if(isExist){
  setIsFavorite(true)
}

},[data,product_id])
const {
 
  product_title,
  product_image,
  category,
  price,
  description,
  specification,
  availability,
  rating,
} = gadget 
const handleFavorite = gadget=>{
  // getAllFavorites(gadget)
  addfavorite(gadget)
  setIsFavorite(true)
}


  return (
    <>
      <div>
        <Heading
          title={"Gadget Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          para={"View More"}
        />
      </div>
<div>


<div className='my-12'>
      {/* Description */}
      <h1 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h1>
      {/* Image */}
      <div className='w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl'>
        <img className='w-full h-full' src={product_image} alt='' />
      </div>
      {/* Title and Favorite Button */}
      <div className='flex justify-between items-center my-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-thin'>{product_title}</h1>
          <p className='text-base'>price: {price}</p>
          <p className='text-base'>Rating: {rating}</p>
        </div>
        <div>
          <button
              disabled={isFavorite}
            onClick={() => handleFavorite(gadget)}
            className='btn btn-warning'
          >
            Add Favorite
          </button>
        </div>
      </div>
    

      <div className='my-6 flex justify-between items-center'>
        <div className='flex-1'>
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-2xl font-thin'>specification:</h1>
            <ul className='text-xl ml-12'>
              {specification &&
                specification.map((item, i) => (
                  <li className='list-disc' key={i}>
                    {item}
                  </li>
                ))}
            </ul>
           
          </div>
        </div>
       
      </div>
    </div>


</div>
    
    </>
  );
};

export default GadgetDetails;
