import React from 'react';


const Product = (props) => {

    const {
        name,
        manufacturer,
        price,
        image,
        country,
    } = props.data;

    return (
        <div className='product'>
            <div className='wrap'>
                <h4>{name}</h4>
                <img alt={name} src={image} />
                <p>Made by: {manufacturer}</p>
                <p>Country: {country}</p>
                <div>
                    <span>{price}</span>
                    <input
                        type='button'
                        value='add cart'
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;