import React from 'react';
import './style.scss';


const Cart= (props) => {
    return (
    <div id='cart'>
        <h3> Cart</h3>
        {
                props.cartProducts.map(product => {
                    return <p>{product.name}</p>
                })
        }
    </div>

    );
}

export default Cart;