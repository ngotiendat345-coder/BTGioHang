import React, { Component } from 'react'

export default class BasicCar extends Component{
    constructor(props){
        super(props);
        this.state={
            image:'./img/CarBasic/products/steel-car.jpg'
        }
    }
    changeCar=(e)=>{
        let color;
        if(e.target.dataset.label==="red"){
            color="./img/CarBasic/products/red-car.jpg";
        }
        else if(e.target.dataset.label==="silver"){
            color="./img/CarBasic/products/silver-car.jpg";
        }
        else{
            color="./img/CarBasic/products/black-car.jpg";
        }
        this.setState({
            image:color
        })
    }
    render(){
        return(
            <>
                <aritcle>
                    <div className="col-6">
                        <h3>Please choose your favorite car</h3>
                        <img src={this.state.image} height={500} width={500}/>
                    </div>
                    <div className="col-6">
                        <h3>Change color</h3>
                        <button className="btn btn-danger" data-label="red" onClick={this.changeCar}>
                            Red color
                        </button>
                        <button className="btn btn-light" data-label="silver" onClick={this.changeCar}>
                            Silver color
                        </button>
                        <button className="btn btn-dark" data-label="black" onClick={this.changeCar}>
                            Black color
                        </button>
                    </div>
                </aritcle>
            </>
        )
    }
}