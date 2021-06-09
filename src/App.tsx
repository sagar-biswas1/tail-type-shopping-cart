import React from 'react';
 import {  useQuery } from 'react-query'

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

export type CartItemType={
id:number;
title:string;
price:number;
description:string;
category:string;
image:string

}

const  getProducts= async ():Promise<CartItemType[]> => await(await  fetch('https://fakestoreapi.com/products')).json()


function App() {
//const [allProducts,setAllProducts]=useState([])

const { isLoading, error, data } = useQuery <CartItemType[]>('products',getProducts
   )

 //  const getTotalItems=()=>null
const handleAddToCart=(clickedItem:CartItemType)=>{
console.log(clickedItem)

return null
}
//const handleRemoveFromCart=()=>null





if (isLoading) return <p className="flex justify-center content-center mt-8" >
  
  Loading...
</p>
 
  
  return (

    <>
    <Navbar/>
     <div className="wrapper h-full flex flex-wrap -mx-1 lg:-mx-4 justify-center">
      {

        data?.map(p=><ProductCard item={p} handleAddToCart={handleAddToCart} key={p.id}/> )

      }

     
    </div>
    </>
  );
}

export default App;
