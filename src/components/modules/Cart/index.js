import React from 'react';
import Head from './Head';
import Body from './Body';
import './style.scss';
import {connect} from 'react-redux';


const Cart= ({products}) => {
    return (
    <div id='cart'>
       
        <Head/>
        <Body products={products}/>
        
    </div>

    );
}
const mapStateToProps = (state) => {
    return {
        products:state.cart.products
    }
}
export default connect(
    mapStateToProps  
)(Cart);