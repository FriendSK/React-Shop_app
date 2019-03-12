import React from 'react';
import Product from './Product';
import OrderForm from './OrderForm'

const Body = (props) => {

    const {
        products,
        remove,
        queryOrderHandler,
        isErrorPhone,
        isSuccessOrder,
        setPhone,
    } = props;

return (
    <div id='cart-body'>
        {
            products.map(product => {
                return <Product
                    key={product.id}
                    data={product}
                    remove={remove}
                />
            })
        }
        <OrderForm queryOrderHandler={queryOrderHandler}
            isErrorPhone={isErrorPhone}
            isSuccessOrder={isSuccessOrder}
            setPhone={setPhone}
        />
    </div>

);
}

export default Body