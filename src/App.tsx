import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home, { CartItemType } from './pages/Home';
import Cart from './pages/Cart';
import { createContext, useState } from "react";


export type ContextState = {
      getTotalItems:(items:CartItemType[])=>void;
      handleRemoveFromCart:(id:number)=>void;
      handleAddToCart:(clickedItem: CartItemType)=>void;
      cartItems:CartItemType[]
};
const contextDefaultValues: ContextState = {
     getTotalItems: ()=>{},
     handleAddToCart:()=>{},
     handleRemoveFromCart:()=>{},
     cartItems:[]
};
export const ProductContext = createContext(contextDefaultValues);


function App() {
  const [cartItems,setCartItems]= useState([] as CartItemType[])
  
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


  const handleRemoveFromCart=(id:number)=>{

   setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
}

  return (
  <ProductContext.Provider value={{getTotalItems,handleRemoveFromCart,handleAddToCart,cartItems}}>
    <Router>
      <Navbar/>
       <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
       </Switch>
    </Router>
  </ProductContext.Provider>
  );
}

export default App;
