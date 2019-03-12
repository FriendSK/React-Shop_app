export const addProductAction = (dispatch, product) => {
    dispatch({ type: 'SET_PRODUCT', product })
}
export const removeProductAction = (dispatch, product) => {
    dispatch({ type: 'REMOVE_PRODUCT', product })
}

export const toggleShowCartAction = (dispatch, value) => {
    dispatch({ type: 'TOGGLE_SHOW_CART', value })
}

export const setPhoneAction = (dispatch, phone) => {
    dispatch({ type: 'SET_PHONE', phone })
}

export const queryOrderAction = (dispatch, data) => {
    if (data.phone === '') {
        dispatch({type:'TOGGLE_ERROR_PHONE'});

        setTimeout(() => {
            dispatch({type:'TOGGLE_ERROR_PHONE'})
        }, 5000);
        return;
    }

    fetch('https://localhost:9000/order', 
     {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
        method: 'post',
        body: JSON.stringify(data.products)
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        if (data.status === 'success') {
            dispatch({type:'TOGGLE_SUCCESS_ORDER'});

            setTimeout(() => {
                dispatch({type:'TOGGLE_SUCCESS_ORDER'})
                dispatch({type: 'CLEAR_CART'});
            }, 5000);
        }
    })
    .catch((er)=>{
 console.log(er.massage)
    })
}










//     let delay = (t,m) => new Promise (resolve => setTimeout(()=>resolve(m), t));
  

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let request = true;
//             if (request) {
//                 resolve('yes data')
//             }
//             reject('not data')
//         }, 2000)
//     });

//     promise.then((data) => {
//         return delay (3000, 'delay')

//     })
//         .then((res) => {

//         })
//         .catch ((err) => {

//         })
//     // dispatch({type:'TOGGLE_SHOW_CART', value})
// }
