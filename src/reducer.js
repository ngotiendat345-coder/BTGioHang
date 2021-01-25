const reducer=(state,action)=>{
    if(action.type==="CLOSE_CART"){
        return {...state,showCart:false};
    }
    if(action.type==="BUY_PRODUCT"){
        const newValue=state.data.find((item)=>{
            if(item.maSP===action.payload){
                return item;
            }
        })
        const {maSP,tenSP,gia,hinhAnh} = newValue;
        let amount = 1;
        let index =state.cart.find((item)=>item.maSP===action.payload);
        if(index){
            amount = index.amount;
        }
        const thanhTien = gia *amount;
        const newCart =[...state.cart,{maSP,tenSP,hinhAnh,thanhTien,amount,gia}]
        return {...state,cart:newCart,showCart:true};
    }
    if(action.type==="DECREASE_AMOUNT"){
        const newState=state.cart.map((item)=>{
            if(item.maSP===action.payload){
                let newAmount = item.amount -1;
                let newPrice = item.thanhTien*newAmount;
                return {...item,amount:newAmount,thanhTien:newPrice}
            }
            return item;
        }).filter((item)=>item.soluong!==0)
        return {...state,cart:newState};
    }
    if(action.type==="INCREASE_AMOUNT"){
        const newState=state.cart.map((item)=>{
            if(item.maSP===action.payload){
                let newAmount = item.amount +1;
                let newPrice = item.thanhTien*newAmount;
                return {...item,amount:newAmount,thanhTien:newPrice}
            }
            return item;
        })
        console.log(newState)
        return {...state,cart:newState};
    }
    if(action.type==="DETAIL_PRODUCT"){
        
        const value = state.data.find((item)=>item.maSP===action.payload)
        
        const newDetail = {show:true,item:{...value}}
        console.log(newDetail);
        return {...state,detailIndex:newDetail}
    }
    if(action.type==="GET_TOTAL"){
        let totalPrice = state.cart.reduce((total,item)=>{
            return total + (item.thanhTien * item.amount);
        },0)
        let amounTotal =state.cart.reduce((total,item)=>{
            return total +  item.amount;
        },0)
        return {...state,amountTotal:amounTotal,total:totalPrice}
    }
    if(action.type==="DELETE_PRODUCT"){
        const newCart = state.cart.filter((item)=>item.maSP!==action.payload);
        return {...state,cart:newCart}
    }
}

export default reducer;