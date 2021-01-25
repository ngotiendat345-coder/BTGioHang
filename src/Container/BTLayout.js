import React, { Component } from 'react'
import Header from '../component/Header'
import Slider from '../component/Slider'
import ProductList from '../component/ProductList'
import Footer from '../component/Footer'
import {mangSanPham} from '../data';

export default class BTLayout extends Component{
    state={data:mangSanPham}
    render(){
         
        return(
            <>
                <Header />
                <Slider/>
                <ProductList data={this.state.data}/>
                <Footer/>
            </>
        )
    }
}