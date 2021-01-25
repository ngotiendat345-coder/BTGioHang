import React, { Component ,useContext} from 'react'
import {AppContext} from  '../context'

 const ListProduct =()=>{

        const {data,detailIndex,displayDetail,BuyProduct} = useContext(AppContext)
        //console.log(data)
        return (
            <section className="mt-5">
                <div className="container-fluid" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'3rem'}}>
                    {data.map((item)=>{
                        return (
                            <article className="card col-12 p-3" key={item.maSP}>
                                <img src={item.hinhAnh} className="card-img-top" style={{ height: '300px' }} alt />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.tenSP}</h5>
                                    <a href="#" className="btn btn-primary" onClick={(e) => {
                                        e.preventDefault();
                                        displayDetail(item.maSP);
                                    }}>Xem chi tiết</a>
                                    <a href="#" className="btn btn-danger" onClick={(e) => {
                                        e.preventDefault();
                                        BuyProduct(item.maSP);
                                    }}>Thêm giỏ hàng</a>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <article className="detail-product container-fluid my-5">
                    {detailIndex.show && <div key={detailIndex.item.maSP}  style={{display:'flex',flexDirection:'row',background:'white'}}>
                                    <div className="col-4">
                                        <img src={detailIndex.item.hinhAnh} className="card-img-top" style={{ height: '500px' }} alt />
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" colspan="2">Thông số kỹ thuật</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Màn Hình</td>
                                                <td>{detailIndex.item.manHinh}</td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>{detailIndex.item.heDieuHanh}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước</td>
                                                <td>{detailIndex.item.cameraTruoc}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau</td>
                                                <td>{detailIndex.item.cameraSau}</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>{detailIndex.item.ram}</td>
                                            </tr>
                                            <tr>
                                                <td>ROM</td>
                                                <td>{detailIndex.item.rom}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                               </div>}
                </article>
            </section>
        )
    
}
export default ListProduct;