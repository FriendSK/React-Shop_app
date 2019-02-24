import React from 'react';
import Head from './Head';
import Body from './Body';
import './style.scss';
import {connect} from 'react-redux';
import {removeProductAction} from '../../../actions/cart'


const Cart= ({products, remove, sum, quantity}) => {
    return (
    <div id='cart'>
       
        <Head 
            sum = {sum}
            quantity={quantity}
            />
        <Body 
        products={products}
        remove = {remove}        
        />
        
    </div>

    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product) => removeProductAction(dispatch, product),
     
    }
}

const mapStateToProps = (state) => {
    return {
        products:state.cart.products,
        quantity: state.cart.quantity,
        sum: state.cart.sum,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);