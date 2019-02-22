const initialState = {
    products: [],
    sum: 0,
    quantity: 0,
    isShow: false
}

const cart = (state = initialState, action) => {
  
    if (action.type === 'show') {
       
    }
    if (action.type === 'SET_PRODUCT') {
       

        return {
            ...state,
            products: [...state.products, action.product]
        }
    }
    return state;
}
export default cart;