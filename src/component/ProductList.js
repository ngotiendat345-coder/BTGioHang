import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        console.log(this.props)
        return (
            <div classname="container-fluid p-5">
                <h1 classname="text-center">BEST SMARTPHONE</h1>
                <div classname="container-fluid " style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem' }}>
                    {this.props.data.map((item) => {
                        const {gia,hinhAnh,maSP,tenSP} =item;
                        return (
                            <article className="card col-12 p-3" key={maSP}>
                                <img src={hinhAnh} className="card-img-top" style={{ height: '300px' }} alt />
                                <div className="card-body">
                                    <h5 className="card-title">{tenSP}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Open</a>
                                    <a href="#" className="btn btn-danger">Cart</a>
                                </div>
                            </article>
                        )
                    })}

                </div>
            </div>

        )
    }
}

{/* <article className="card col-12 p-3  w-100" >
                        <img src="./img/sp_iphoneX.png" className="card-img-top" alt style={{height:'300px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Iphone X</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Open</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </article>
                    <article className="card col-12 p-3 ">
                        <img src="./img/sp_note7.png" className="card-img-top"  style={{height:'300px'}} alt/>
                        <div className="card-body">
                            <h5 className="card-title">Galaxy Note 7</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Open</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </article>
                    <article className="card col-12 p-3 ">
                        <img src="./img/sp_vivo850.png" className="card-img-top"  style={{height:'300px'}} alt/>
                        <div className="card-body">
                            <h5 className="card-title">Vivo</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Open</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </article> */}