import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CART_ADD_ITEM , CART_REMOVE_ITEM } from '../Constants/cartConstants'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    
    console.log('Dato addToCart de cartActions')
    

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,  
            countInStock: data.countInStock, 
            qty,
        }
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))   
            
}



export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

/*
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
  
    const {
      //userLogin: { userInfo },
      cart: { cartItems },
    } = getState();
  
    const newItem = {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    };
  
    dispatch({
      type: CART_ADD_ITEM,
      payload: newItem,
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

/*
  export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    

    const cart = getState().cart;
    cart.cartItems.push({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock, 
        qty,
    })

    dispatch({
        type: CART_ADD_ITEM,
        payload: cart,
    })

    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems))  
    console.log('hola', cart) 
            
} 

*/

