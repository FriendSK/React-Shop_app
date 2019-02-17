import React from 'react';
import  Product from './Product';

const Body = ({products}) => {
    return (
        <div id='cart-body'>
            {
                    products.map(product => {
                    return <Product key={product.id}
                    data={product}/>
                })
            }
        </div>

    );
}

export default Body