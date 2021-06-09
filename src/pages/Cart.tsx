import { useContext } from "react";
import { ProductContext } from "../App";
import CartCard from "../components/CartCard";
import { CartItemType } from "./Home";


function Cart() {

const {cartItems}= useContext(ProductContext)
console.log(cartItems)


const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
  return <div>

    <div className="text-center text-3xl">
      Your shopping cart

{cartItems?.length?  <div>Total : {calculateTotal(cartItems).toFixed(2)}</div> :<p>No items in cart</p>}
    </div>




{ cartItems.map(item=><CartCard item={item} />) }

  </div>;
}

export default Cart;
