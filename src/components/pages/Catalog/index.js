import React from 'react';
import ProductList from './ProductList'
import './style.scss';
import products from '../../../data/products.json';

const Catalog = () => {
    return (
        <div className='page container'>
        <ProductList products = {products} />
        </div>
    )

}

export default Catalog;