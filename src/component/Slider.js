import React, { Component } from 'react'

export default class Slider extends Component{
    render(){
        return(
          <div id="carouselExampleControls" classname="carousel slide" data-ride="carousel">
  <div className="carousel-inner " >
    <div className="carousel-item active" style={{height:'100vh'}}>
      <img src="./img/slide_1.jpg" classname="d-block w-100"  />
    </div>
    <div className="carousel-item" style={{height:'100vh'}}>
      <img src="./img/slide_2.jpg" classname="d-block w-100"  />
    </div>
    <div className="carousel-item"  style={{height:'100vh'}}>
      <img src="./img/slide_3.jpg" classname="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span classname="carousel-control-prev-icon" aria-hidden="true" />
    <span classname="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span classname="carousel-control-next-icon" aria-hidden="true" />
    <span classname="sr-only">Next</span>
  </a>
</div>

        )
    }
}