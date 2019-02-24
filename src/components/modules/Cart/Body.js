import React from 'react';
import  Product from './Product';

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
        </div>

    );
}

export default Body