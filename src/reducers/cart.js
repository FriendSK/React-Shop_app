const initialState = {
    products: [],
    sum: 0,
    quantity: 0,
    isShow: false
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

    default: return state;
       
    }

}

  

export default cart;