import React from 'react';
import Rounder from './Rounder'


const Head = ({ quantity, sum, toggle }) => {
  return (
    <div id='cart-head' onClick = {toggle}>
      <i>total quantity: <b> {quantity} </b></i>
      <i>total sum: <b> <Rounder sum={sum} sumbol='USD' />  </b></i>
    </div>

  );
}

export default Head