import { useContext } from "react";
import CartCard from "../components/CartCard";
import { CartItemType } from "./Home";

import {ProductContext} from './Home'
// type Props={
// cartItems:CartItemType[];
// handleAddToCart:(clickedItem:CartItemType)=>void;
// removeFromCart:(id:number)=>void


// }

function Cart() {

const {cartItems}= useContext(ProductContext)


  return <div>Your shopping cart

{cartItems?.length&& <p>No items in cart</p>}

{cartItems?.map(p=>"hello world")
}
<CartCard/>
  </div>;
}

export default Cart;
