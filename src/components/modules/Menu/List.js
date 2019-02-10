import React from 'react';
import {NavLink} from 'react-router-dom';

const List = (props) => {
 return props.menu.map((el)=>{
    return (
        <li key= {el.link}>
        
        <NavLink exact  to={el.link}> {el.name}  </NavLink>
        </li>
    )
})
}



export default List;