import React from 'react';
import Rounder from './Rounder'


const Product = ({ data, remove }) => {

    const { name, sum, image, count, } = data;

    
    
    return (
        <div className='cart-product'>
            <img src={image} alt='' />
            <span>{name}</span>
            <i><Rounder sum={sum} sumbol = 'USD'/> </i>
            <b>{count}</b>
            <u 
                onClick = {() => remove(data)}
            >x</u>
        </div>

    );
}

export default Product