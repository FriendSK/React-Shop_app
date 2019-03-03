import React from 'react';


const OrderForm = ({queryOrderHandler}) => {
  return (
    <div id='order-form-cart' >
        <input type='text' placeholder="Enter your phone or email"/>
        <input type="button" value="Send order" onClick={queryOrderHandler}/>
    </div>

  );
}

export default OrderForm