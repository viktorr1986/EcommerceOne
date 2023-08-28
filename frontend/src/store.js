//import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './Reducers/productReducers'
import { cartReducer } from './Reducers/cartReducers'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItem') ?
    JSON.parse(localStorage.getItem('cartItem')) : []

export const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

//const store = createStore(reducer, initialState, 
    //composeWithDevTools(applyMiddleware(...middleware)))

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});


export default store