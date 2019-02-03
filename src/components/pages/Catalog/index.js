import React from 'react';
import ProductList from './ProductList'
import './style.scss';
import products from '../../../data/products.json';

const Catalog = () => {
    return (
        <div id='catalog' className='page container'>

            <div className='list-product'>
                <ProductList products={products} />
            </div>
        </div>
    )

}

export default Catalog;