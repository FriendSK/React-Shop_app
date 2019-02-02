import React from 'react';

const ProductList = ({products}) => {
    return products.map ((product)=>
    
    <li key={product.id}> {product.name}</li>

    )

}

export default ProductList;