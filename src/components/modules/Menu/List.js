import React from 'react';
import {Link} from 'react-router-dom';

const List = (props) => {
 return props.menu.map((el)=>{
    return (
        <li key= {el.link}>
        
        <Link to={el.link}> {el.name}</Link>
        </li>
    )
})
}



export default List;