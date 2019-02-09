import React from 'react';


const Product = ({data, addProduct}) => {

    const {
        name,
        manufacturer,
        price,
        image,
        country,
    } = data;

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
                        onClick = {()=>addProduct(data)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;