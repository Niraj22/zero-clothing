//It is the base reducer object which represents all of the state of our application
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
}) 