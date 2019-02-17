import React from 'react';


const Product = ({data}) => {

    const {name,  price, image } = data ;

    return (
    <div className='cart-product'>
    <img src = {image} alt=''></img>
     <span>{name}</span>
     <i>{price}</i>
     <b>1</b>
     <u>x</u>
    </div>

    );
}

export default Product