
import {CartItemType} from '../pages/Home'

type Props={
item:CartItemType,
handleAddToCart:(clickedItem:CartItemType)=>void


}

const ProductCard  = ({item,handleAddToCart}:Props) => {


const{title,price,description,category,image}=item


  return (
    
       <div className="p-10 h-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="max-h-72">
          <img
          className=" m-auto"
          src={image}
          alt={title}
          style={{maxHeight:300,maxWidth:300, objectFit:'contain'}}
        />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
          {description.slice(0,100)}....
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Price : {price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Category : {category}
          </span>
         
        </div>
          <button onClick={()=>handleAddToCart(item)
          
          } className="p-2 mt-2 mb-2 m-auto flex bg-green-200 hover:bg-green-300 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>  Add to cart
          </button>
      </div>
    </div>
       
  
  );
};


export default ProductCard;
