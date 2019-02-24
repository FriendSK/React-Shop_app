import React from 'react';
import Rounder from './Rounder'


const Head = ({quantity, sum}) => {
    return (
    <div id='cart-head'>
      <i>total quantity: {quantity}</i>
      <i>total sum: <Rounder sum={sum} sumbol = 'USD'/> </i>
    </div>

    );
}

export default Head