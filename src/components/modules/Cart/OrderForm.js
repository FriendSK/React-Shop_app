import React from 'react';


const OrderForm = ({ queryOrderHandler, isErrorPhone, isSuccessOrder, setPhone }) => {
  return (
    <div id='order-form-cart' >
      <input
        type='text'
        placeholder="Enter your phone or email"
        onChange={(e)=>setPhone(e.target.value)} 
        />
      <input
        type="button"
        value="Send order"
        onClick={queryOrderHandler}
        />
      <div className="message">
        {isErrorPhone ? 'Enter phone or email' : ''}
        {isSuccessOrder ? 'Your data order success' : ''}
      </div>
    </div>

  );
}

export default OrderForm