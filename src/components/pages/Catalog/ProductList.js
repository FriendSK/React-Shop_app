import React from 'react';
import Product from './Product';

const ProductList = ({products}) => {
    return products.map (product =>
    
        <Product key={product.id} data = {product}/>
    )

}

export default ProductList;