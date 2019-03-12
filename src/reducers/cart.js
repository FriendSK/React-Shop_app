const initialState = {
    products: [],
    sum: 0,
    quantity: 0,
    isShow: false,
    isErrorPhone: false,
    isSuccessOrder: false,
    phone: '',
}

const upProduct = function (products, data, type ) {

     let isUp = false;

    const result = products.reduce((ac, product )=> {
        if (product.id === data.id) {
            isUp = true;

            if(!type && product.count === 1){
                return ac;
        }

            return ac.concat({
                ...product,
                count: type ? ++product.count : --product.count,
                sum: product.count * product.price,
            })
        }
        return ac.concat(product);
    }, [])

    return !isUp ? result.concat({
        ...data,
        count:1, 
        sum: data.price 
        }): result;
}

const getIsShowCart = (isShow, value) => {
    if (value === 'hide') {
        return false;
    }
    if (value === 'show') {
        return true;
    }
    return !isShow;
}



const cart = (state = initialState, action) => {
  
   switch (action.type) {

    case 'SET_PRODUCT': {
       
        return {
            ...state,
            quantity: ++ state.quantity,
            sum: parseFloat(state.sum) + parseFloat(action.product.price),
            products: 
            upProduct(
                 state.products,
                 action.product,
                 true
            )
        }
    }
    case 'REMOVE_PRODUCT': {
        return {
            ...state,
            quantity: -- state.quantity,
            sum: parseFloat(state.sum) - parseFloat(action.product.price),
            products: 
            upProduct(
                 state.products,
                 action.product,
                 false
            )
        }
    }
    case 'TOGGLE_SHOW_CART': {
        return {
            ...state, 
            isShow: getIsShowCart ( state.isShow, action.value),
        }
    }
    case 'TOGGLE_SUCCESS_ORDER':{
        return {
            ...state,
            isSuccessOrder: !state.isSuccessOrder
        }
    }

    case 'TOGGLE_ERROR_PHONE':{
        return {
            ...state,
            isErrorPhone: !state.isErrorPhone
        }
    }

    case 'SET_ PHONE':{
        return {
            ...state,
            phone: action.phone
        }
    }

    case 'CLEAR_CART':{
        return {
            ...initialState,
            quantity: 0,
        }
    }

    default: return state;
       
    }

}

  

export default cart;