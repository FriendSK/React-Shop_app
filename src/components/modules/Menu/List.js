import React from 'react';
import {Link} from 'react-router-dom';

const List = (props) => {
 return props.menu.map((el)=>{
    return (
        <li key= {el.link}>
        
        <link to={el.link}> {el.name}</link>
        </li>
    )
})
}



export default List;