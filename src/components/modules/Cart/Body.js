import React from 'react';
import  Product from './Product';
import OrderForm from './OrderForm'

const Body = ({products, remove}) => {
    return (
        <div id='cart-body'>
            {
                    products.map(product => {
                    return <Product 
                    key={product.id}
                    data={product}
                    remove = {remove}
                    />
                })
            }
            <OrderForm/>
        </div>

    );
}

export default Body