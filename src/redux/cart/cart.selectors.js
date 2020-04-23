import { createSelector } from 'reselect'

const selectCart = state => state.cart; //takes only the needed state from the chunk of state

export const selectCartItems = createSelector(
    [selectCart], //input selector
    (cart)=> cart.cartItems) //function that will return valur to input selector

 export const selectCartItemsCount = createSelector(
    [selectCartItems],
     cartItems => 
     cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity+cartItem.quantity, 0)
    )