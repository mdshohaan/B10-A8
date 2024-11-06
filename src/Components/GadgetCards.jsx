import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
  const navigate = useNavigate()
  const { category } = useParams();
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
   if(category){
    const filteredByCategory = [...data].filter(
      (gadgets) => gadgets.category === category
    );
    setGadgets(filteredByCategory);
   } else {
    setGadgets(data.slice(0,6))
   }
  }, [category, data]);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
    <button className="btn btn-warning" onClick={()=>navigate('/gadgets')}>View All</button>
    </>
  );
};

export default GadgetCards;
