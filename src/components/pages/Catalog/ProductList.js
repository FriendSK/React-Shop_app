import React from 'react';
import Product from './Product';

const ProductList = ({products, addProduct }) => {
    return products.map (product =>
    
        <Product 
            key={product.id}
            data = {product}
            addProduct= {addProduct}
        />
    )

}

export default ProductList;