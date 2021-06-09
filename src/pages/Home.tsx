

import {  useQuery } from 'react-query'
import ProductCard from '../components/ProductCard'
import { useContext } from 'react';
import { ProductContext } from '../App';


export type CartItemType={
   id:number;
   title:string;
   price:number;
   description:string;
   category:string;
   image:string
   quantity:number

}

const  getProducts= async ():Promise<CartItemType[]> => await(await  fetch('https://fakestoreapi.com/products')).json()


export default function Home() {
const {handleAddToCart}= useContext(ProductContext)
const { isLoading, data } = useQuery <CartItemType[]>('products',getProducts  )


if (isLoading) return <p className="flex justify-center content-center mt-8" >Loading...</p>
 
return (
     <>
      <div className="wrapper h-full flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        {
           data?.map(p=><ProductCard handleAddToCart={handleAddToCart} item={p}  key={p.id}/> )
        }
     </div>
     </>
    )
}
