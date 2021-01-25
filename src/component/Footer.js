import React, { Component } from 'react'

export default class Footer extends Component{
    render(){
        return(
            <footer>
            <h1 className="text-center">PROMOTION</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                            <img src="./img/promotion_1.png" className="w-100 d-block"/>
                    </div>
                    <div className="col-4">
                            <img src="./img/promotion_2.png" className="w-100 d-block"/>
                    </div>
                    <div className="col-4">
                            <img src="./img/promotion_3.jpg" className="w-100 d-block"/>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}