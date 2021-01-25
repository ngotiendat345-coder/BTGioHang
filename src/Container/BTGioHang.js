import React, { Component, useContext } from 'react'
import ListProduct from '../componentCart/ListProduct'
import Cart from '../componentCart/Cart'
import {AppContext} from '../context'
export default function BTGioHang (){
        const {amountTotal} = useContext(AppContext);
        return(
           <>
           <header>
                   <h1 className="text-center text-success display-3">Bài tập giỏ hàng</h1>
                   <p className="text-right text-danger">Giỏ hàng: (<span className="text-danger">{amountTotal}</span>)</p>
           </header>
           <Cart />
            <ListProduct/>
           </>
        )
    

}