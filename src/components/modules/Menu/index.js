import React from 'react';
import menu from './menu.json';
import List from './List';
import './style.scss';

const Menu = () => {
    return (
      
        <ul id='menu-header'>
            <List 

                    menu={menu}
            
            />
               
        </ul>
      
    );
}

export default Menu;