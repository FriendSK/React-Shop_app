export const addProductAction = (dispatch, product) => {
    dispatch({ type: 'SET_PRODUCT', product })
}
export const removeProductAction = (dispatch, product) => {
    dispatch({ type: 'REMOVE_PRODUCT', product })
}

export const toggleShowCartAction = (dispatch, value) => {
    dispatch({ type: 'TOGGLE_SHOW_CART', value })
}

export const queryOrderAction = (dispatch, data) => {

    fetch('https://google.com', 
     {
        method: 'post',
        body: JSON.stringify(data.products)
    })
    .then((response)=>{

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
