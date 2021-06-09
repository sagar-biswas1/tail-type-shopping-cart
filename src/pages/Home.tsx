
import { createContext, useState } from 'react';
import {  useQuery } from 'react-query'
import ProductCard from '../components/ProductCard'


export type CartItemType={
id:number;
title:string;
price:number;
description:string;
category:string;
image:string
quantity:number

}
export type ContextState = {
getTotalItems:(items:CartItemType[])=>void;
handleRemoveFromCart:(id:string)=>void
cartItems:CartItemType[]
};
const contextDefaultValues: ContextState = {
  getTotalItems: ()=>{},

  handleRemoveFromCart:()=>{},
  cartItems:[]
};
const  getProducts= async ():Promise<CartItemType[]> => await(await  fetch('https://fakestoreapi.com/products')).json()

export const ProductContext = createContext(contextDefaultValues);



export default function Home() {
const [cartItems,setCartItems]= useState([] as CartItemType[])

const { isLoading, data } = useQuery <CartItemType[]>('products',getProducts  )

const getTotalItems=(items:CartItemType[])=>items.reduce((accumulator:number, item)=>accumulator + item.quantity,0)
 const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };
const handleRemoveFromCart=(id:string)=>null

console.log(cartItems)




if (isLoading) return <p className="flex justify-center content-center mt-8" >Loading...</p>
 

return (
    <ProductContext.Provider value={{getTotalItems,handleRemoveFromCart,cartItems}}>
      <div className="wrapper h-full flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        {
           data?.map(p=><ProductCard handleAddToCart={handleAddToCart} item={p}  key={p.id}/> )
        }
     </div>
  </ProductContext.Provider>
    )
}
