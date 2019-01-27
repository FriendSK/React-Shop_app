import React from 'react';

const List = (props) => {
 return props.menu.map((el)=>{
    return (
        <li key= {el.link}>
        <a href={el.link}>{el.name}   </a>
        </li>
    )
})
}



export default List;