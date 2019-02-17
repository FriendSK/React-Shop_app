import React from 'react';
import {connect} from 'react-redux';
import ProductList from './ProductList'
import './style.scss';
import products from '../../../data/products.json';
import { addProductAction } from '../../../actions/cart'

const Catalog = (props) => {
    return (
        <div id='catalog' className='page container'>

            <div className='list-product'>
                <ProductList 
                    products={products} 
                     addProduct= {props.addProduct}
                />
            </div>
        </div>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct:  (product) => addProductAction (dispatch, product )
    }
}
export default connect (null, mapDispatchToProps)(Catalog) ;