import toast from "react-hot-toast";

// get all gadget from local storage
const getAllFavorites =()=>{
  const all = localStorage.getItem('favorites')

  if(all){
    const favorites = JSON.parse(all)
    console.log(favorites);
    return favorites
  } else {
    console.log([]);
    return []
  }
}



// add a gadget to local storage
const addfavorite = gadget =>{
  const favorites =getAllFavorites()
  const isExist = favorites.find(item =>item.product_id ==gadget.product_id)
  if(isExist) return toast.error("Gadget Already Exist!!")

  favorites.push(gadget)
    localStorage.setItem('favorites',JSON.stringify(favorites))
  toast.success("Successfully Added")
}


// remove a coffee from local storage
const removeFavorite = product_id => {
  // get all previously saved coffee data
  const favorites = getAllFavorites()
  const remaining = favorites.filter(gadget => gadget.product_id != product_id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}



export { addfavorite, getAllFavorites, removeFavorite };

