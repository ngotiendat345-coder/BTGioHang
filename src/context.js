import React, { Component, createContext, useEffect, useReducer } from 'react'
import {mangSanPham2} from './data'
import reducer from './reducer'

const initialState = {
    data: mangSanPham2,
    total: 0,
    amountTotal: 0,
    detailIndex:{show:false,item:{maSP:'',hinhAnh:"",manHinh:"",heDieuHanh:"",cameraSau:"",cameraTruoc:"",ram:"",rom:""}},
    cart:[],
    showCart:false
  }
export const AppContext = createContext()

export const ContextProvider=(props)=> {
        const [state,dispatch] = useReducer(reducer,initialState)
        console.log(state);
        function CloseCart(){
            dispatch({type:"CLOSE_CART"});
        }
        function BuyProduct(id){
            dispatch({type:"BUY_PRODUCT",payload:id})
        }
        function IncreaseAmount(id){
            dispatch({type:"INCREASE_AMOUNT",payload:id})
        }
        function DecreaseAmount(id){
            dispatch({type:"DECREASE_AMOUNT",payload:id})
        }
        function getTotal(){
            dispatch({type:"GET_TOTAL"});
        }
        function displayDetail(id){
            dispatch({type:"DETAIL_PRODUCT",payload:id});
        }
        function DeleteProduct(id){
            dispatch({type:"DELETE_PRODUCT",payload:id});
        }
       //console.log(state);
       useEffect(()=>{
        getTotal();
       },[state.cart])
        return(
            <AppContext.Provider value={{...state,BuyProduct,IncreaseAmount,DecreaseAmount,displayDetail,DeleteProduct,CloseCart}}>
                {props.children}
            </AppContext.Provider>
        )

}