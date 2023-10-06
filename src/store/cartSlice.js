//Importing Dependecncies
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


//Declaring cart's initial state
const initialState = {
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
  };


  //creating cart slice
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
      addItem(state, action){
        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
        if(itemIndex >=0){
          state.cartItems[itemIndex].cartQuantity += 1;
          toast.info("Increased product quantity",{
            position:"top-right"
          })
        }else{
          const tempProduct = {...action.payload, cartQuantity:1}
          state.cartItems.push(tempProduct)
          toast.success("Item added to cart successfully",{
            position:"top-right"
          })
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      },
      removeItem: (state, action) => {
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter((item)=>
          item.id !== itemId)
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        toast.error("Item removed from cart successfully",{
          position:"top-right"
        });
      },
      getTotal(state, action){
        let {total, quantity}= state.cartItems.reduce(
          (cartTotal, cartItem)=>{
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;
  
          cartTotal.total += itemTotal;
          cartTotal.quantity +=cartQuantity;
  
          return cartTotal;
        }, {
          total: 0,
          quantity: 0
        })
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }
    }
  })

  // Action creators are generated for each case reducer function
export const { addItem, removeItem, getTotal } = cartSlice.actions
export default cartSlice.reducer

