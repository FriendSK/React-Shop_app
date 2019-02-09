import React from 'react';
import Menu from '../../modules/Menu';
import Cart from '../../modules/Cart';
import './style.scss';

const Header = (props) => {
    return ( 
        <header> 
      <div className='container'>
      <Menu/>
      <Cart cartProducts={props.cartProducts}/>

       </div>
        </header>

       
    );
}

export default Header;